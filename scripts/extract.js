import { createWriteStream, createReadStream } from 'fs';
import { extractSync } from 'bun';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const zipPath = path.join(projectRoot, 'package-lock.zip');

try {
  console.log('[v0] Starting extraction from:', zipPath);
  console.log('[v0] Extracting to:', projectRoot);
  
  // Use bun's extractSync to extract the zip
  extractSync({
    file: zipPath,
    dir: projectRoot,
  });
  
  console.log('[v0] Extraction successful!');
} catch (error) {
  console.error('[v0] Error extracting file:', error.message);
  process.exit(1);
}
