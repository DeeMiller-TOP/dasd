import zipfile
import os

zip_path = '/vercel/share/v0-project/package-lock.zip'
extract_path = '/vercel/share/v0-project'

try:
    print('Unzipping package-lock.zip...')
    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
        zip_ref.extractall(extract_path)
    print('Unzipping complete!')
except Exception as error:
    print(f'Error unzipping file: {str(error)}')
    exit(1)
