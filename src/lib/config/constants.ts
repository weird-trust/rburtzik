export const CLOUDINARY_CONFIG = {
  baseUrl: `https://res.cloudinary.com/${process.env.VITE_CLOUDINARY_CLOUD_NAME}`,
  transformations: {
    image: 'f_auto,q_auto,fl_no_analytics',
    video: 'f_auto:video,q_auto,fl_no_analytics'
  }
};

export const getCloudinaryUrl = (publicId: string, isVideo = false) => {
  const { baseUrl, transformations } = CLOUDINARY_CONFIG;
  const transform = isVideo ? transformations.video : transformations.image;
  return `${baseUrl}/${isVideo ? 'video/upload/' : ''}${transform}/${publicId}`;
};