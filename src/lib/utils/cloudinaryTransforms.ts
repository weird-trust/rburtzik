interface CloudinaryTransforms {
  width: number | string;
  height?: number | string;
  crop: string;
  quality?: string | number;
  dpr?: string;
  responsive?: boolean;
  format?: string;
  fetchFormat?: string;
  flags?: string;
  loading?: string;
  sizes?: string;
}

interface CloudinaryVideoTransforms {
  width: number;
  height: number;
  crop: string;
  quality: string;
  format?: string;
}

export const TRANSFORMS = {
  landscape: {
    width: 1200,
    height: 675,  // 16:9 but smaller
    crop: 'limit',
    quality: 'auto:good',
    dpr: 'auto',
    format: 'auto',
    fetchFormat: 'auto',
    flags: 'progressive'
  },
  portrait: {
    width: 800,
    height: 1200, // 2:3 but smaller
    crop: 'limit',
    quality: 'auto:good',
    dpr: 'auto',
    format: 'auto',
    fetchFormat: 'auto',
    flags: 'progressive'
  },
  square: {
    width: 1000,
    height: 1000, // 1:1 but smaller
    crop: 'limit',
    quality: 'auto:good',
    dpr: 'auto',
    format: 'auto',
    fetchFormat: 'auto',
    flags: 'progressive'
  },
  auto: {
    width: 1200,
    height: 'auto',
    crop: 'limit',
    quality: 'auto:good',
    dpr: 'auto',
    responsive: true,
    format: 'auto',
    fetchFormat: 'auto',
    flags: 'progressive',
    loading: 'lazy',
    sizes: '(max-width: 768px) 100vw, 80vw'
  },
  projectMedia: {
    width: 1200,
    height: 'auto', // Let aspect ratio be maintained naturally
    crop: 'limit',
    quality: 'auto:good',
    dpr: 'auto',
    responsive: true,
    format: 'auto',
    fetchFormat: 'auto',
    flags: 'progressive',
    loading: 'lazy',
    sizes: '(max-width: 768px) 100vw, 80vw'
  },
  // Neue Video-Transforms
  projectVideo: {
    width: 1920,
    height: 1080, // 16:9
    crop: 'fill',
    quality: 'auto',
    format: 'auto'
  }
};

export function getImageTransform(publicId: string): CloudinaryTransforms {
  // Let Cloudinary maintain original aspect ratio
  if (publicId.includes('project')) {
    return {
      ...TRANSFORMS.projectMedia,
      crop: 'scale' 
    };
  }
  return TRANSFORMS.auto;
}

export function getVideoTransform(publicId: string): CloudinaryVideoTransforms {
  if (publicId.includes('project')) {
    return TRANSFORMS.projectVideo;
  }
  return {
    ...TRANSFORMS.projectVideo,
  };
}