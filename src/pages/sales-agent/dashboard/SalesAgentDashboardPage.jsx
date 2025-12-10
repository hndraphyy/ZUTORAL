import React from "react";
import { getRevenueData } from "./data/revenueData";
import { revenueChartOptions } from "../../../components/charts/styleChart/chartOptions";
import usePageTitle from "../../../hooks/usePageTitle";
import Header from "../../../components/Header";
import RevenueChart from "../../../components/charts/RevenueChart";

const SalesAgentDashboardPage = () => {
  usePageTitle("Dashboard - Sales Agent");

  const salesData = getRevenueData();
  const options = revenueChartOptions;

  return (
    <div className="mb-10">
      <Header title="Dashboard" />
      <div className="flex flex-col gap-6">
        <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
          <RevenueChart data={salesData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default SalesAgentDashboardPage;
