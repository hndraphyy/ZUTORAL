export const getDashboardData = () => {
  const totalTransactions = {
    total: 999,
    completed: 968,
    pending: 19,
    failed: 12,
  };

  const transactionsToday = {
    total: 31,
    completed: 27,
    pending: 3,
    failed: 1,
  };

  const totalTransactionsToday = Object.values(transactionsToday).reduce(
    (a, b) => a + b,
    0
  );

  const employees = {
    all: 85,
    active: 78,
    inactive: 7,
  };

  return {
    totalTransactions,
    transactionsToday,
    totalTransactionsToday,
    employees,
  };
};
