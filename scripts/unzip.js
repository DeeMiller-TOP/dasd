import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');
const zipPath = path.join(projectRoot, 'package-lock.zip');
const extractPath = projectRoot;

try {
  console.log('Unzipping package-lock.zip...');
  execSync(`unzip -o "${zipPath}" -d "${extractPath}"`, { stdio: 'inherit' });
  console.log('Unzipping complete!');
} catch (error) {
  console.error('Error unzipping file:', error.message);
  process.exit(1);
}
