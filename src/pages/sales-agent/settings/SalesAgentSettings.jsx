import React, { useState } from "react";
import usePageTitle from "../../../hooks/usePageTitle";
import Header from "../../../components/Header";

const SalesAgentSettingsPage = () => {
  usePageTitle("Settings - SalesAgent");

  return (
    <div>
      <div className="mb-10">
        <Header title="Settings" />
        <div className="mb-6"></div>
      </div>
    </div>
  );
};

export default SalesAgentSettingsPage;
