import React, { useState } from "react";
import usePageTitle from "../../../hooks/usePageTitle";
import Header from "../../../components/Header";

const SalesAgentReportsPage = () => {
  usePageTitle("Reports - SalesAgent");

  return (
    <div>
      <div className="mb-10">
        <Header title="Reports" />
        <div className="mb-6"></div>
      </div>
    </div>
  );
};

export default SalesAgentReportsPage;
