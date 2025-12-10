export const getRevenueData = (revenueValues) => ({
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Revenue",
      data: revenueValues || [
        12000000, 15000000, 13000000, 18000000, 20000000, 19000000, 22000000,
        24000000, 21000000, 26000000, 28000000, 20000000,
      ],
    },
  ],
});
