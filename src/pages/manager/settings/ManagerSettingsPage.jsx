import React from "react";
import usePageTitle from "../../../hooks/usePageTitle";

const ManagerSettingsPage = () => {
  usePageTitle("Settings - Manager");
  return (
    <div className="flex items-center justify-center h-screen">
      <h2>settings</h2>
    </div>
  );
};

export default ManagerSettingsPage;
