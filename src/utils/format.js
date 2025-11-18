export const formatRupiah = (value) => {
  if (value === null || value === undefined) return "-";

  const number = Number(String(value).replace(/\D/g, ""));

  return number.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
};
