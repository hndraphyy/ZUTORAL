import React from "react";
import usePageTitle from "../../../hooks/usePageTitle";

const ManagerEmployeesPage = () => {
  usePageTitle("Employees - Manager");
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h2>employees</h2>
    </div>
  );
};

export default ManagerEmployeesPage;
