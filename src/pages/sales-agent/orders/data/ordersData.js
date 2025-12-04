import { generateFakeData } from "../../../../utils/faker";

export const generateOrdersData = (count = 100) => {
  return generateFakeData(count, (i) => ({
    id: i + 1,
    invoice: `INV/${1000 + i}`,
    customer: `Customer Adi Satya ${i}`,
    total: 1530000 + i * 100,
    date: `2025-11-${String((i % 30) + 1).padStart(2, "0")}`,
    status: ["paid", "pending", "cancelled"][i % 3],
  }));
};
