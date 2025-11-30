import { generateFakeData } from "../../../utils/faker";

export const generateDashboardData = () => {
  const transactions = generateFakeData(100, (i) => {
    const stock = (i * 5) % 50;
    let status = "available";
    if (stock === 0) status = "out_of_stock";
    else if (stock < 10) status = "low";

    return {
      id: i + 1,
      invoice: `INV/${1000 + i}`,
      customer: `Customer Adi Satya ${i}`,
      sales: `Sales Person ${i}`,
      total: 1530000 + i * 100,
      date: `2025-11-${String((i % 30) + 1).padStart(2, "0")}`,
      status: ["completed", "pending", "failed"][i % 3],
    };
  });

  // Hitung KPI
  const totalEmployees = 100; // mock
  const totalProducts = 100; // mock
  const today = new Date().toISOString().split("T")[0];
  const transactionsToday = transactions.filter(t => t.date === today).length;
  const revenueToday = transactions
    .filter(t => t.date === today)
    .reduce((sum, t) => sum + t.total, 0);
  const lowStockCount = transactions.filter(p => p.stock < 10).length;

  // Hitung revenue per bulan (12 bulan terakhir)
  const monthlyRevenue = getMonthlyRevenue(transactions);

  // Top 5 produk terlaris (mock)
  const topProducts = [
    { name: "Product Aburing Sirs 1", sales: 150 },
    { name: "Product Aburing Sirs 2", sales: 120 },
    { name: "Product Aburing Sirs 3", sales: 90 },
    { name: "Product Aburing Sirs 4", sales: 80 },
    { name: "Product Aburing Sirs 5", sales: 70 },
  ];

  // Recent transactions & employees (mock)
  const recentTransactions = transactions.slice(0, 5);
  const recentEmployees = Array.from({ length: 5 }, (_, i) => ({
    name: `Employee Sadirifan ${i}`,
    email: `employee${i}@example.com`,
    joinDate: `2025-11-${String(i + 1).padStart(2, "0")}`,
  }));

  return {
    totalEmployees,
    totalProducts,
    transactionsToday,
    revenueToday,
    lowStockCount,
    salesData: monthlyRevenue,
    topProducts,
    recentTransactions,
    recentEmployees,
  };
};

// Fungsi helper
const getMonthlyRevenue = (transactions) => {
  const now = new Date();
  const months = [];

  for (let i = 0; i < 12; i++) {
    const monthDate = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const monthKey = `${monthDate.getFullYear()}-${String(monthDate.getMonth() + 1).padStart(2, "0")}`;
    months.push({
      label: monthDate.toLocaleString("en-US", { month: "short" }),
      value: 0,
      key: monthKey,
    });
  }

  transactions.forEach((t) => {
    const [year, month] = t.date.split("-");
    const monthKey = `${year}-${month}`;
    const index = months.findIndex(m => m.key === monthKey);
    if (index !== -1) {
      months[index].value += t.total;
    }
  });

  return months.reverse();
};