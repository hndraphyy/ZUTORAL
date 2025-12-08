import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const TopEmployeeChart = () => {
  const topProducts = [
    { name: "Wireless Mouse", unit: 320 },
    { name: "Mechanical Keyboard", unit: 280 },
    { name: 'Monitor 24"', unit: 210 },
    { name: "USB-C Hub", unit: 190 },
  ];

  const backgroundColors = ["#8B5CF6", "#A78BFA", "#C4B5FD", "#DDD6FE"];

  const data = {
    labels: topProducts.map((p) => p.name),
    datasets: [
      {
        label: "Units Sold",
        data: topProducts.map((p) => p.unit),
        backgroundColor: backgroundColors,
        borderRadius: 6,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => ` ${context.parsed.y} units sold`,
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

  return (
    <div className="h-full w-full">
      <h3 className="text-base lg:text-lg 2xl:text-2xl mb-6 font-medium text-gray-600">
        Top Employee
      </h3>
      <div className="h-[220px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default TopEmployeeChart;
