import path from 'path';
import { fileURLToPath } from 'url';
await import('./src/env.mjs');

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(path.dirname(fileURLToPath(import.meta.url)), 'src/styles')]
  }
};

export default config;
