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
import { barChartStyle } from "./styleChart/chartStyles";
import { topBarChartOptions } from "./styleChart/chartOptions";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const TopBarChart = ({
  dataList = [],
  title = "Top Items",
  valueLabel = "items",
}) => {
  const backgroundColors = barChartStyle;
  const options = topBarChartOptions;

  const data = {
    labels: dataList.map((item) => item.name),
    datasets: [
      {
        label: valueLabel.charAt(0).toUpperCase() + valueLabel.slice(1),
        data: dataList.map((item) => item.value),
        backgroundColor: backgroundColors,
        borderRadius: 6,
        borderSkipped: false,
      },
    ],
  };

  return (
    <div className="h-full w-full">
      <h3 className="text-base lg:text-lg 2xl:text-2xl mb-6 font-medium text-gray-600">
        {title}
      </h3>
      <div className="h-[220px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default TopBarChart;
