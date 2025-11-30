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

const verticalLinePlugin = {
  id: "verticalLine",
  beforeDatasetsDraw: (chart) => {
    const {
      ctx,
      tooltip,
      chartArea: { top, bottom },
    } = chart;

    if (tooltip?._active?.length) {
      const x = tooltip._active[0].element.x;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x, top);
      ctx.lineTo(x, bottom);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#6b46c1";
      ctx.setLineDash([5, 5]);
      ctx.stroke();
      ctx.restore();
    }
  },
};

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

  const options = {
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

  const currentYear = new Date().getFullYear();

  return (
    <div>
      <h2 className="text-base lg:text-lg 2xl:text-2xl font-medium text-gray-800 mb-7">
        Monthly Revenue {currentYear}
      </h2>
      <div className="w-full h-[280px] 2xl:h-[310px]">
        <div className="w-full h-full">
          <Line data={data} options={options} plugins={[verticalLinePlugin]} />
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
