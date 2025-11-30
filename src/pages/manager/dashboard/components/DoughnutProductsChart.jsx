import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { getProductStatusSummary } from "../utils/productStatusSummary";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutProductsChart = () => {
  const { available, low, outOfStock } = getProductStatusSummary();

  const total = available + low + outOfStock;

  const data = {
    labels: ["Available", "Low Stock", "Out of Stock"],
    datasets: [
      {
        data: [available, low, outOfStock],
        backgroundColor: ["#8B5CF6", "#F59E0B", "#EF4444"],
        borderWidth: 0,
        cutout: "60%",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "#6b7280",
          font: { family: "Outfit", size: 12 },
          padding: 16,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.parsed;
            return `${label}: ${value} items`;
          },
        },
        bodyFont: { family: "Outfit" },
      },
    },
  };

  return (
    <div className="h-full w-full">
      <h3 className="text-base lg:text-lg 2xl:text-2xl mb-4 font-medium text-gray-600">
        Product Stock Status
      </h3>
      <div className="relative h-[220px]">
        <Doughnut data={data} options={options} />
        <p className="absolute bottom-0 right-0 transform -translate-x-1/2 -translate-y-1/2 text-lg font-semibold text-gray-700">
          {total}
        </p>
      </div>
    </div>
  );
};

export default DoughnutProductsChart;
