import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

import usePageTitle from "../../../hooks/usePageTitle";
import Header from "../../../components/Header";
import SearchInput from "../../../components/filters/Search";
import Button from "../../../components/ui/Button";

const SalesAgentCustomersPage = () => {
  usePageTitle("Customers - SalesAgent");

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

  const handleAddCustomer = () => {
    alert("Add Customer clicked");
  };
  return (
    <div>
      <div className="mb-10">
        <Header title="Customers" />
        <div className="mb-6">
          <div className="grid grid-cols-12 gap-3">
            <SearchInput
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="col-span-8 lg:col-span-10"
            />
            <Button
              onAdd={handleAddCustomer}
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

export default SalesAgentCustomersPage;
