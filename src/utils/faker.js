export const generateFakeData = (count, templateFn) => {
  return Array.from({ length: count }, (_, i) => templateFn(i + 1));
};
