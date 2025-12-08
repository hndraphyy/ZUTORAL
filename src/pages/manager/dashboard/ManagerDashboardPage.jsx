import React from "react";
import { managerData, managerOptions } from "./data/revenueData";
import usePageTitle from "../../../hooks/usePageTitle";
import Header from "../../../components/Header";
import RevenueChart from "../../../components/charts/RevenueChart";
import Transactions from "./components/Transactions";
import EmployeesDashboard from "./components/Employees";
import TopEmployeeChart from "./components/TopEmployeeChart";
import DoughnutProductsChart from "./components/DoughnutProductsChart";

export default function ManagerDashboardPage() {
  usePageTitle("Dashboard - Manager");

  return (
    <div className="mb-10">
      <Header title="Dashboard" />
      <div className="flex flex-col gap-6">
        <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
          <RevenueChart data={managerData} options={managerOptions} />
        </div>
        <Transactions />
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
}
