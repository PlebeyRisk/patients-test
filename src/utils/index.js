export const getFullYear = birthDate => {
  return ((new Date().getTime() - new Date(birthDate)) / (24 * 3600 * 365.25 * 1000)) | 0;
};