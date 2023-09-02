/**
 * @returns {string} example: "Sep 02 2023 11:08:28"
 */
export const formatDate = (): string => {
  return new Date().toString().slice(4, 24);
};
