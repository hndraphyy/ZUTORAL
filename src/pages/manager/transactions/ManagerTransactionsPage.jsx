import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

import usePageTitle from "../../../hooks/usePageTitle";
import Header from "../../../components/Header";
import SearchInput from "../../../components/filters/Search";
import FilterDate from "../../../components/filters/Date";
import FilterStatus from "../../../components/filters/Status";
import Button from "../../../components/ui/Button";

const ManagerTransactionsPage = () => {
  usePageTitle("Transactions - Manager");

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
        <Header title="Transactions" />
        <div className="mb-6">
          <div className="grid grid-cols-12 grid-rows-2 lg:grid-rows-1a gap-2.5">
            <SearchInput
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="col-span-12 lg:col-span-6"
            />
            <FilterDate className="col-span-4 lg:col-span-2" />
            <FilterStatus
              className="col-span-4 lg:col-span-2"
              options={[
                { value: "completed", label: "Completed" },
                { value: "pending", label: "Pending" },
                { value: "failed", label: "Failed" },
              ]}
            />
            <Button
              onAdd={handleAddProduct}
              icon={<FaPlus />}
              label="Add"
              className="col-span-4 lg:col-span-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerTransactionsPage;
