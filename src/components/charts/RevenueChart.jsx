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
import { verticalLinePlugin } from "./plugins/verticalLinePlugin";
import { revenueChartStyle } from "./styleChart/chartStyles";
import { revenueChartOptions } from "./styleChart/chartOptions";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip
);

const RevenueChart = ({ data }) => {
  const currentYear = new Date().getFullYear();
  const options = revenueChartOptions;

  // ✅ Gabungin data + style di sini
  const chartData = {
    ...data,
    datasets: data.datasets.map((dataset) => ({
      ...dataset,
      ...revenueChartStyle,
    })),
  };

  return (
    <div>
      <h2 className="text-base lg:text-lg 2xl:text-2xl font-medium text-gray-800 mb-7">
        Monthly Revenue {currentYear}
      </h2>
      <div className="w-full h-[280px] 2xl:h-[310px]">
        <Line
          data={chartData}
          options={options}
          plugins={[verticalLinePlugin]}
        />
      </div>
    </div>
  );
};

export default RevenueChart;
