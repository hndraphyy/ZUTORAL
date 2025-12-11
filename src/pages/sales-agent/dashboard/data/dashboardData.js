const getLast4MonthsStaticData = () => {
  // --------------------------------------------------------------------- GENERATE MONTH
  const now = new Date();
  const labels = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const label = date.toLocaleString("en-US", {
      month: "short",
      year: "numeric",
    });
    labels.push(label);
  }

  const staticOrders = [40, 80, 131, 73, 40, 130, 160];

  return labels.map((month, index) => ({
    month,
    orders: staticOrders[index],
  }));
};

export const getDashboardData = () => {
  // --------------------------------------------------------------------- ORDERS
  const totalOrders = {
    total: 512,
    completed: 483,
    pending: 18,
    failed: 11,
  };

  const ordersToday = {
    total: 22,
    completed: 19,
    pending: 2,
    failed: 1,
  };

  const totalOrdersToday = Object.values(ordersToday).reduce(
    (a, b) => a + b,
    0
  );

  // --------------------------------------------------------------------- BAR CHART
  const myPerformanceLast4Months = getLast4MonthsStaticData();

  // --------------------------------------------------------------------- BAR CHART
  const totalCustomer = 999;

  return {
    totalOrders,
    ordersToday,
    totalOrdersToday,
    myPerformanceLast4Months,
    totalCustomer,
  };
};
