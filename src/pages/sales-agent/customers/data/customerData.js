import { generateFakeData } from "../../../../utils/faker";

export const generateCustomerData = (count = 100) => {
  return generateFakeData(count, (i) => ({
    id: i + 1,
    name: `Customer ${i + 1}`,
    phone: `+62 812-3456-78${String(i).padStart(2, "0")}`,
    email: `customer${i + 1}@example.com`,
    joinDate: `2025-11-${String((i % 30) + 1).padStart(2, "0")}`,
  }));
};
