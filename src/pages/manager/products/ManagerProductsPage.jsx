import React from "react";
import usePageTitle from "../../../hooks/usePageTitle";

const ManagerProductsPage = () => {
  usePageTitle("Products - Manager");
  return (
    <div className="flex items-center justify-center h-screen">
      <h2>products</h2>
    </div>
  );
};

export default ManagerProductsPage;
