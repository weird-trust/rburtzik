interface CloudinaryTransforms {
  width: number;
  height: number;
  crop: string;
  gravity: string;
}

export const TRANSFORMS = {
  landscape: {
    width: 1200,
    height: 675,  // 16:9
    crop: 'fill',
    gravity: 'auto'
  },
  portrait: {
    width: 800,
    height: 1200, // 2:3
    crop: 'fill',
    gravity: 'auto'
  },
  square: {
    width: 1000,
    height: 1000, // 1:1
    crop: 'fill',
    gravity: 'auto'
  },
  auto: {
    width: 1200,
    height: 0, // Höhe wird automatisch berechnet
    crop: 'scale',
    gravity: 'auto'
  }
};

export function getImageTransform(publicId: string): CloudinaryTransforms {  
  return TRANSFORMS.auto;
}