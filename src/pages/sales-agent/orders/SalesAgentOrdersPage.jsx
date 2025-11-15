import React, { useState } from "react";
import usePageTitle from "../../../hooks/usePageTitle";
import Header from "../../../components/Header";

const SalesAgentOrdersPage = () => {
  usePageTitle("Orders - SalesAgent");

  return (
    <div>
      <div className="mb-10">
        <Header title="Orders" />
        <div className="mb-6"></div>
      </div>
    </div>
  );
};

export default SalesAgentOrdersPage;
