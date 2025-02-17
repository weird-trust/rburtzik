interface CloudinaryTransforms {
  width: number;
  height: number;
  crop: string;
}

export const TRANSFORMS = {
  landscape: {
    width: 1200,
    height: 675,  // 16:9
    crop: 'fill',
  },
  portrait: {
    width: 800,
    height: 1200, // 2:3
    crop: 'fill',
  },
  square: {
    width: 1000,
    height: 1000, // 1:1
    crop: 'fill',
  },
  auto: {
    width: 1200,
    height: 0,
    crop: 'scale',
  },
  // Add new project media transform
  projectMedia: {
    width: 960,
    height: 600, // 16:10
    crop: 'fill',
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