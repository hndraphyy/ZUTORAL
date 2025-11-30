import React from "react";
import usePageTitle from "../../../hooks/usePageTitle";
import Header from "../../../components/Header";
import RevenueChart from "./components/RevenueChart";
import Transactions from "./components/Transactions";

export default function ManagerDashboardPage() {
  usePageTitle("Dashboard - Manager");
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <Header title="Dashboard" />
      <div className="flex flex-col gap-6">
        <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-base lg:text-lg 2xl:text-2xl font-medium text-gray-800 mb-7">
            Monthly Revenue {currentYear}
          </h2>
          <div className="w-full h-[280px] 2xl:h-[310px]">
            <RevenueChart />
          </div>
        </div>
        <Transactions />
      </div>
    </div>
  );
}
