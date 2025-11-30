import React from "react";
import usePageTitle from "../../../hooks/usePageTitle";
import Header from "../../../components/Header";
import RevenueChart from "./components/RevenueChart";

export default function ManagerDashboardPage() {
  usePageTitle("Dashboard - Manager");

  return (
    <div>
      <Header title="Dashboard" />

      <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-lg font-medium text-gray-800 mb-6">
          Monthly Revenue (2025)
        </h2>
        <div className="w-full h-[280px] 2xl:h-[310px]">
          <RevenueChart />
        </div>
      </div>
    </div>
  );
}
