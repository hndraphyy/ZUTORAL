import React, { useState } from "react";
import usePageTitle from "../../../hooks/usePageTitle";

import Header from "../../../components/Header";
import FilterDate from "../../../components/filters/Date";
import BaseTable from "../../../components/table/BaseTable";

const ManagerReportsPage = () => {
  usePageTitle("Reports - Manager");

  const columns = [
    { header: "No", accessor: "id" },
    { header: "Nama", accessor: "name" },
    { header: "Price", accessor: "price" },
    { header: "Stock", accessor: "stock" },
    {
      header: "Action",
      render: () => (
        <div className="flex  gap-2">
          <button className="text-gray-700 text-lg">Edit</button>
          <button className="text-gray-700 text-lg">Delete</button>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      name: "Kopi Hitam",
      price: "Rp 15.000",
      stock: 23,
    },
    {
      id: 2,
      name: "Roti Coklat",
      price: "Rp 12.000",
      stock: 8,
    },
  ];

  const handleAddProduct = () => {
    alert("Add Product clicked");
  };

  return (
    <div>
      <Header title="Reports" />
      <div className="mb-6">
        <div className="grid grid-cols-13 gap-2 md:gap-0">
          <FilterDate className="col-span-6" />
          <span className="col-span-1 flex justify-center items-center text-2xl 2xl:text-3xl">
            to
          </span>
          <FilterDate className="col-span-6" />
        </div>
      </div>
      <BaseTable columns={columns} data={data} />
    </div>
  );
};

export default ManagerReportsPage;
