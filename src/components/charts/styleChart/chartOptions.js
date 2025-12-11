import { color } from "chart.js/helpers";

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

export const topBarChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      titleFont: { size: 12, family: "Outfit" },
      bodyFont: { size: 12, family: "Outfit" },
      callbacks: {
        title: (context) => context[0].label,
        label: (context) => `${context.parsed.y}`,
      },
    },
  },

  scales: {
    x: {
      grid: { display: false },
      ticks: {
        color: "#6b7280",
        font: { family: "Outfit", size: 12 },
      },
      border: { display: false },
    },
    y: {
      beginAtZero: true,
      grid: { color: "rgba(0,0,0,0.03)" },
      ticks: {
        color: "#6b7280",
        font: { family: "Outfit", size: 12 },
        precision: 0,
      },
      border: { display: false },
    },
  },
};
