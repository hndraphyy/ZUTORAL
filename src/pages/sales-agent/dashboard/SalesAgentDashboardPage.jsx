import React from "react";
import { FaUser } from "react-icons/fa6";
import { getRevenueData } from "./data/revenueData";
import { revenueChartOptions } from "../../../components/charts/styleChart/chartOptions";
import { getDashboardData } from "./data/dashboardData";
import usePageTitle from "../../../hooks/usePageTitle";
import Header from "../../../components/Header";
import RevenueChart from "../../../components/charts/RevenueChart";
import StatCards from "../../../components/cards/StatCards";
import TopBarChart from "../../../components/charts/BarChart";

const SalesAgentDashboardPage = () => {
  usePageTitle("Dashboard - Sales Agent");

  const salesData = getRevenueData();
  const options = revenueChartOptions;
  const { totalOrders, ordersToday, myPerformanceLast4Months, totalCustomer } =
    getDashboardData();

  const chartData = myPerformanceLast4Months.map((item) => ({
    name: item.month,
    value: item.orders,
  }));

  return (
    <div className="mb-9">
      <Header title="Dashboard" />
      <div className="flex flex-col gap-6">
        <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200">
          <RevenueChart data={salesData} options={options} />
        </div>
        <StatCards
          title="Orders"
          yearlyData={totalOrders}
          todayData={ordersToday}
        />
        <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200 relative -mt-7 md:mt-0">
          <TopBarChart
            dataList={chartData}
            title="Customer Growth In 7 Month"
            valueLabel="customer"
          />
          <div className="absolute right-4 top-4">
            <span className="flex justify-center items-center gap-1 md:gap-2">
              <span className="hidden lg:block text-base 2xl:text-[18px] font-medium text-gray-600">
                Total Customer :
              </span>
              <span className="text-base 2xl:text-[20px] font-medium text-gray-600">
                {totalCustomer}
              </span>
              <FaUser className="h-5 w-5 2xl:w-6 2xl:h-6 text-purple" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesAgentDashboardPage;
