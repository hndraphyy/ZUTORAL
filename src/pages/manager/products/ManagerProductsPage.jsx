import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";

import usePageTitle from "../../../hooks/usePageTitle";
import ActionModal from "../../../components/modal/ActionModal";
import Header from "../../../components/Header";
import SearchInput from "../../../components/filters/Search";
import FilterStatus from "../../../components/filters/Status";
import Button from "../../../components/ui/Button";
import BaseTable from "../../../components/table/BaseTable";

const ManagerProductsPage = () => {
  usePageTitle("Products - Manager");

  const [search, setSearch] = useState("");
  const [isStatus, setStatus] = useState("");

  const columns = [
    { header: "No", accessor: "id" },
    { header: "Name", accessor: "name" },
    { header: "Price", accessor: "price" },
    { header: "Stock", accessor: "stock" },
    { header: "Category", accessor: "category" },
    { header: "Status", accessor: "status" },
    {
      header: "Actions",
      render: (row) => (
        <button
          className="py-[7px] px-2 bg-purple text-white rounded-md cursor-pointer"
          onClick={handleActionModal}
        >
          <FiMoreHorizontal size={24} />
        </button>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      name: "Kopi Hitam",
      price: "Rp 15.000",
      stock: 23,
      category: "Minuman",
      status: "Out of Stock",
    },
    {
      id: 2,
      name: "Roti Coklat",
      price: "Rp 12.000",
      stock: 8,
      category: "Roti",
      status: "Low",
    },
  ];

  const filteredData = data.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchStatus = isStatus
      ? p.status.toLowerCase() === isStatus.toLowerCase()
      : true;
    return matchSearch && matchStatus;
  });

  const handleActionModal = () => {
    return <ActionModal />;
  };

  const handleAddProduct = () => {
    alert("Add Product clicked");
  };

  return (
    <div>
      <div className="mb-10">
        <Header title="Products" />
        <div className="mb-6">
          <div className="grid grid-cols-12 grid-rows-2 lg:grid-rows-1 gap-3">
            <SearchInput
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="col-span-12 lg:col-span-8"
            />
            <FilterStatus
              value={isStatus}
              onChange={(e) => setStatus(e.target.value)}
              className="col-span-6 lg:col-span-2"
              options={[
                { value: "low", label: "Low" },
                { value: "out of stock", label: "Out of Stock" },
              ]}
            />
            <Button
              onAdd={handleAddProduct}
              icon={<FaPlus />}
              label="Add"
              className="col-span-6 lg:col-span-2"
            />
          </div>
        </div>
        <BaseTable columns={columns} data={filteredData} />
      </div>
    </div>
  );
};

export default ManagerProductsPage;
