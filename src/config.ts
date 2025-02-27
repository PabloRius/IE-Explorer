const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

export const getImageUrl = (path: string) => {
  return `${IMAGE_BASE_URL}/${path}`;
};
