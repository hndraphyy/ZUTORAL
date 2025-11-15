import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

import usePageTitle from "../../../hooks/usePageTitle";
import Header from "../../../components/Header";
import SearchInput from "../../../components/filters/Search";
import Button from "../../../components/ui/Button";
import FilterStatus from "../../../components/filters/Status";

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
          <div className="grid grid-cols-12 gap-2 md:gap-3">
            <SearchInput
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="col-span-8"
            />
            <FilterStatus className="col-span-2" />
            <Button
              onAdd={handleAddProduct}
              icon={<FaPlus />}
              label="Add "
              className="col-span-2"
              ClassNameLabel="hidden md:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerProductsPage;
