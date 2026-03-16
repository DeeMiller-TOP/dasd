import zipfile
import os

zip_path = '/vercel/share/v0-project/package-lock.zip'
extract_dir = '/vercel/share/v0-project'

try:
    print(f'[v0] Extracting {zip_path}')
    print(f'[v0] To directory: {extract_dir}')
    
    if not os.path.exists(zip_path):
        raise FileNotFoundError(f'Zip file not found at {zip_path}')
    
    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
        zip_ref.extractall(extract_dir)
    
    print('[v0] Extraction successful!')
    
except Exception as e:
    print(f'[v0] Error: {str(e)}')
    exit(1)
