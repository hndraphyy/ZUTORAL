import React, { useState } from "react";
import usePageTitle from "../../../hooks/usePageTitle";
import Header from "../../../components/Header";
import FilterBar from "../../../components/filters/FilterBar";
import BaseTable from "../../../components/table/BaseTable";

const ManagerProductsPage = () => {
  usePageTitle("Products - Manager");

  const [search, setSearch] = useState("");

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

  const filteredData = data.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddProduct = () => {
    alert("Add Product clicked");
  };

  return (
    <div>
      <div className="mb-10">
        <Header title="Products" />
        <div className="mb-6">
          <FilterBar
            search={search}
            setSearch={setSearch}
            onAdd={handleAddProduct}
            showAdd
            className="grid-cols-5"
            classNameSearch="col-span-4"
            classNameAdd="col-span-1"
          />
        </div>
      </div>
    </div>
  );
};

export default ManagerProductsPage;
