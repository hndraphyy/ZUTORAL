export const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};
