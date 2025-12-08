import { generateProductData } from "../../products/data/productData";

export const getProductStatusSummary = () => {
  const products = generateProductData(1000);

  let available = 0;
  let low = 0;
  let outOfStock = 0;

  products.forEach((p) => {
    if (p.status === "available") available++;
    else if (p.status === "low") low++;
    else if (p.status === "out_of_stock") outOfStock++;
  });

  return {
    total: products.length,
    available,
    low,
    outOfStock,
  };
};
