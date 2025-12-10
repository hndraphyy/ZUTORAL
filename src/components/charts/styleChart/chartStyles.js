export const revenueChartStyle = {
  borderColor: "#6b46c1",
  backgroundColor: (context) => {
    const ctx = context.chart.ctx;
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, "rgba(107, 70, 193, 0.4)");
    gradient.addColorStop(1, "rgba(107, 70, 193, 0)");
    return gradient;
  },
  borderWidth: 3,
  pointRadius: 0,
  hoverRadius: 5,
  pointBackgroundColor: "white",
  pointBorderColor: "#6b46c1",
  pointBorderWidth: 2,
  tension: 0.4,
  fill: true,
};
