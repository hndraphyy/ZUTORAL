export const salesData = {
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
      data: [
        12000000, 15000000, 13000000, 18000000, 20000000, 19000000, 22000000,
        24000000, 21000000, 26000000, 28000000, 20000000,
      ],
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
    },
  ],
};

export const salesOptions = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: "index",
    intersect: false,
  },
  plugins: {
    legend: {
      display: false,
    },
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
      ticks: {
        color: "#6b7280",
        font: { family: "Outfit", size: 12 },
      },
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
