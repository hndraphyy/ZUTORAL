export const generateFakeData = (count, factory) => {
  return Array.from({ length: count }, (_, i) => factory(i));
};
