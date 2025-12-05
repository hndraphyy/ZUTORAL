import React, { useState } from "react";
import usePageTitle from "../../../hooks/usePageTitle";
import Header from "../../../components/Header";

const SalesAgentDashboardPage = () => {
  usePageTitle("Dashboard - Sales Agent");

  return (
    <div>
      <div className="mb-10">
        <Header title="Dashboard" />
        <div className="mb-6"></div>
      </div>
    </div>
  );
};

export default SalesAgentDashboardPage;
