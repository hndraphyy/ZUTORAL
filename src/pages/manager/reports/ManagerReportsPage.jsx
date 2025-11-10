import React from "react";
import usePageTitle from "../../../hooks/usePageTitle";

const ManagerReportsPage = () => {
  usePageTitle("Reports - Manager");
  return (
    <div className="flex items-center justify-center h-screen">
      <h2>reports</h2>
    </div>
  );
};

export default ManagerReportsPage;
