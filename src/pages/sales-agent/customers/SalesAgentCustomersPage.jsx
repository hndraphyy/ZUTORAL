import React from "react";
import usePageTitle from "../../../hooks/usePageTitle";

const SalesAgentCustomersPage = () => {
  usePageTitle("Customers - Sales Agent");

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-gray-800">
        SALES AGENT CUSTOMERS
      </h1>
    </div>
  );
};

export default SalesAgentCustomersPage;
