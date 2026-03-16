import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const zipPath = path.join(projectRoot, 'package-lock.zip');

try {
  console.log('[v0] Starting extraction from:', zipPath);
  console.log('[v0] Extracting to:', projectRoot);
  
  // Check if zip file exists
  if (!fs.existsSync(zipPath)) {
    throw new Error(`Zip file not found at ${zipPath}`);
  }
  
  // Use unzip command
  execSync(`unzip -o "${zipPath}" -d "${projectRoot}"`, {
    stdio: 'inherit'
  });
  
  console.log('[v0] Extraction successful!');
} catch (error) {
  console.error('[v0] Error extracting file:', error.message);
  process.exit(1);
}
