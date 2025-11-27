import { generateFakeData } from "../../../../utils/faker";

export const generateEmployeeData = (count = 100) => {
  return generateFakeData(count, (i) => ({
    id: i + 1,
    name: `Employee Sadirifan ${i}`,
    username: `employee${i}`,
    email: `employee${i}@example.com`,
    status: ["active", "inactive"][i % 2],
  }));
};