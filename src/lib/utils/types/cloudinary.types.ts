export interface CloudinaryUploadResponse {
    public_id: string;
    secure_url: string;
    resource_type: 'image' | 'video' | 'raw';
    format: string;
  }
  
  export interface UploadOptions {
    projectId: string;
    resourceType?: 'image' | 'video' | 'auto';
    tags?: string[];
  }

  export interface CloudinaryAsset {
    publicId: string;
    url: string;
    type: 'image' | 'video';
  }
  
  export interface ProjectAssets {
    [projectId: string]: {
      images: CloudinaryAsset[];
      videos: CloudinaryAsset[];
    };
  }