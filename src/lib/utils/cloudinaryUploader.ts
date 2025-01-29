import { cloudinary } from '../config/cloudinary';
import type { CloudinaryUploadResponse, UploadOptions } from './types/cloudinary.types';
import { promises as fs } from 'fs';
import path from 'path';

export async function uploadAsset(
  filePath: string,
  options: UploadOptions
): Promise<CloudinaryUploadResponse> {
  try {
    return await cloudinary.uploader.upload(filePath, {
      folder: options.projectId,
      resource_type: options.resourceType || 'auto',
      tags: options.tags
    });
  } catch (error) {
    console.error(`Failed to upload ${filePath}:`, error);
    throw error;
  }
}

export async function uploadProjectFolder(
  projectId: string,
  folderPath: string
): Promise<CloudinaryUploadResponse[]> {
  try {
    const files = await fs.readdir(folderPath);
    const filePaths = files.map(file => path.join(folderPath, file));
    
    const uploads = filePaths.map(filePath => 
      uploadAsset(filePath, { projectId })
    );
    
    return Promise.all(uploads);
  } catch (error) {
    console.error(`Failed to upload project folder ${folderPath}:`, error);
    throw error;
  }
}