import { createServer } from "http";
import { readFile, stat } from "fs/promises";
import { join, extname, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = 3000;
const BASE_PATH = "/developer-center";
// Subir un nivel desde scripts/ para llegar a la raíz del proyecto
const OUT_DIR = join(__dirname, "..", "out", "developer-center");

const MIME_TYPES = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".mjs": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".eot": "application/vnd.ms-fontobject",
};

async function fileExists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

async function serveFile(filePath, res) {
  try {
    const content = await readFile(filePath);
    const ext = extname(filePath);
    const contentType = MIME_TYPES[ext] || "application/octet-stream";

    const cacheControl =
      ext === ".html"
        ? "no-cache, no-store, must-revalidate"
        : "public, max-age=31536000, immutable";

    res.writeHead(200, {
      "Content-Type": contentType,
      "Cache-Control": cacheControl,
    });
    res.end(content);
  } catch (error) {
    console.error("Error serving file:", error);
    res.writeHead(500);
    res.end("Internal Server Error");
  }
}

const server = createServer(async (req, res) => {
  let url = req.url;

  console.log(`[${new Date().toISOString()}] ${req.method} ${url}`);

  // Redirect root to base path
  if (url === "/") {
    res.writeHead(301, { Location: `${BASE_PATH}/` });
    res.end();
    return;
  }

  // Check if URL starts with base path
  if (!url.startsWith(BASE_PATH)) {
    res.writeHead(404);
    res.end("Not Found - Path must start with /developer-center");
    return;
  }

  // Remove base path from URL
  url = url.slice(BASE_PATH.length) || "/";

  // Remove query string
  url = url.split("?")[0];

  // Handle trailing slashes
  if (url !== "/" && url.endsWith("/")) {
    url = url.slice(0, -1);
  }

  let filePath = join(OUT_DIR, url === "/" ? "index.html" : url);

  // Try to find the file
  if (await fileExists(filePath)) {
    const stats = await stat(filePath);

    if (stats.isDirectory()) {
      filePath = join(filePath, "index.html");
      if (await fileExists(filePath)) {
        await serveFile(filePath, res);
      } else {
        res.writeHead(404);
        res.end("Not Found");
      }
    } else {
      await serveFile(filePath, res);
    }
  } else {
    // Try with .html extension
    const htmlPath = filePath + ".html";
    if (await fileExists(htmlPath)) {
      await serveFile(htmlPath, res);
    } else {
      // SPA fallback
      const indexPath = join(OUT_DIR, "index.html");
      if (await fileExists(indexPath)) {
        await serveFile(indexPath, res);
      } else {
        res.writeHead(404);
        res.end("Not Found");
      }
    }
  }
});

server.listen(PORT, () => {
  console.log(`
🚀 Server running at http://localhost:${PORT}${BASE_PATH}/
📁 Serving from: ${OUT_DIR}
  `);
});
