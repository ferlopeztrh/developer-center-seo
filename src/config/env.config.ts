export const env = {
  nodeEnv: process.env.NODE_ENV,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
} as const;
