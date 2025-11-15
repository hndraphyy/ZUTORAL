import React, { useState } from "react";
import usePageTitle from "../../../hooks/usePageTitle";
import Header from "../../../components/Header";

const SalesAgentCustomersPage = () => {
  usePageTitle("Customers - SalesAgent");

  return (
    <div>
      <div className="mb-10">
        <Header title="Customers" />
        <div className="mb-6"></div>
      </div>
    </div>
  );
};

export default SalesAgentCustomersPage;
