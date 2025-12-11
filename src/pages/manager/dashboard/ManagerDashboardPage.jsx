import React from "react";
import usePageTitle from "../../../hooks/usePageTitle";
import { getRevenueData } from "./data/revenueData";
import { revenueChartOptions } from "../../../components/charts/styleChart/chartOptions";
import { getDashboardData } from "./data/dashboardData";
import Header from "../../../components/Header";
import RevenueChart from "../../../components/charts/RevenueChart";
import StatCards from "../../../components/cards/StatCards";
import EmployeesDashboard from "./components/EmployeesDashboard";
import TopEmployeeChart from "./components/TopEmployeeChart";
import DoughnutProductsChart from "./components/DoughnutProductsChart";

const ManagerDashboardPage = () => {
  usePageTitle("Dashboard - Manager");

  const managerData = getRevenueData();
  const options = revenueChartOptions;
  const { totalTransactions, transactionsToday } = getDashboardData();

  return (
    <div className="mb-10">
      <Header title="Dashboard" />
      <div className="flex flex-col gap-6">
        <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
          <RevenueChart data={managerData} options={options} />
        </div>
        <StatCards
          title="Transactions"
          yearlyData={totalTransactions}
          todayData={transactionsToday}
        />
        <div className="grid grid-cols-12 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200 col-span-12 md:col-span-6 lg:col-span-2">
            <EmployeesDashboard />
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200 col-span-12 md:col-span-6 lg:col-span-6">
            <TopEmployeeChart />
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md border mt-6 lg:mt-0 border-gray-200 col-span-12 lg:col-span-4">
            <DoughnutProductsChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboardPage;
