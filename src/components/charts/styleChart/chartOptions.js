export const revenueChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: "index",
    intersect: false,
  },
  plugins: {
    legend: { display: false },
    tooltip: {
      mode: "index",
      intersect: false,
      backgroundColor: "#6b46c1",
      displayColors: false,
      titleMarginBottom: 0,
      titleFont: { size: 0 },
      bodyFont: { size: 12, family: "Outfit" },
      callbacks: {
        label: (context) => {
          const value = context.raw;
          return `Rp${Number(value).toLocaleString("id-ID")}`;
        },
      },
    },
    verticalLine: {},
  },
  scales: {
    x: {
      grid: { color: "rgba(0,0,0,0.03)" },
      ticks: { color: "#6b7280", font: { family: "Outfit", size: 12 } },
      border: { display: false },
    },
    y: {
      border: { display: false },
      beginAtZero: true,
      grid: { color: "rgba(0,0,0,0.03)" },
      ticks: {
        color: "#6b7280",
        font: { family: "Outfit", size: 12 },
        callback: (value) => `Rp${value.toLocaleString("id-ID")}`,
      },
    },
  },
};
