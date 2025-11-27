import { generateFakeData } from "../../../../utils/faker";

export const generateProductData = (count = 100) => {
  return generateFakeData(count, (i) => {
    const stock = (i * 5) % 50;
    let status = "available";
    if (stock === 0) status = "out_of_stock";
    else if (stock < 10) status = "low";

    return {
      id: i + 1,
      name: `Product Aburing Sirs ${i}`,
      price: 15000 + i * 100,
      stock,
      category: ["Roti", "Minuman", "Snack"][i % 3],
      status,
    };
  });
};
