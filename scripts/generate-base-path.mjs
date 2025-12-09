import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const subpath = "developer-center";
const outDir = path.join(__dirname, "..", "out");
const tempDir = path.join(__dirname, "..", "out-temp");

// Mover out a temp
fs.renameSync(outDir, tempDir);

// Crear out/developer-center
fs.mkdirSync(path.join(outDir, subpath), { recursive: true });

// Copiar contenido
fs.cpSync(tempDir, path.join(outDir, subpath), { recursive: true });

// Limpiar temp
fs.rmSync(tempDir, { recursive: true });

console.log(`✓ Build movido a out/${subpath}/`);
