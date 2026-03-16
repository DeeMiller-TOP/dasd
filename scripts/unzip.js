import { execSync } from 'child_process';

try {
  console.log('Unzipping package-lock.zip...');
  const zipPath = '/vercel/share/v0-project/package-lock.zip';
  const extractPath = '/vercel/share/v0-project';
  
  execSync(`unzip -o "${zipPath}" -d "${extractPath}"`, { 
    stdio: 'inherit' 
  });
  
  console.log('Unzipping complete!');
} catch (error) {
  console.error('Error unzipping file:', error.message);
  process.exit(1);
}
