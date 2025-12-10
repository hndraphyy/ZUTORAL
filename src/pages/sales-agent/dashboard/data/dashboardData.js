export const getDashboardData = () => {
  // Orders this year
  const totalOrders = {
    total: 512,
    completed: 483,
    pending: 18,
    failed: 11,
  };

  // Orders today
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

  return {
    totalOrders,
    ordersToday,
    totalOrdersToday,
  };
};
