import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.join(__dirname, '..');
const defaultEnv = path.join(rootDir, '.env');
const localEnv = path.join(rootDir, '.env.local');

// Load .env first, then override with .env.local when present.
dotenv.config({ path: defaultEnv });
if (fs.existsSync(localEnv)) {
  dotenv.config({ path: localEnv, override: true });
}
