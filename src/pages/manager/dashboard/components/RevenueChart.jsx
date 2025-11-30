import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip
);

const RevenueChart = () => {
  const data = {
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
        data: [
          1200000, 1500000, 1300000, 1800000, 2000000, 1900000, 2200000,
          2400000, 2100000, 2600000, 2800000, 3000000,
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
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: "white",
        pointBorderColor: "#6b46c1",
        pointBorderWidth: 2,
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        mode: "index",
        intersect: false,
        Axis: "x",
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
    },
    scales: {
      x: {
        grid: { color: "rgba(0,0,0,0.03)" },
        ticks: { color: "#6b7280", font: { family: "Outfit", size: 12 } },
      },
      y: {
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

  return (
    <div className="w-full h-full">
      <Line data={data} options={options} />
    </div>
  );
};

export default RevenueChart;
