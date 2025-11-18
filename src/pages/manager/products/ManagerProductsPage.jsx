import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { formatRupiah } from "../../../utils/format";
import { generateFakeData } from "../../../utils/faker";
import usePagination from "../../../hooks/usePagination";

import usePageTitle from "../../../hooks/usePageTitle";
import ActionModal from "../../../components/modal/ActionModal";
import Header from "../../../components/Header";
import SearchInput from "../../../components/filters/Search";
import FilterStatus from "../../../components/filters/Status";
import Button from "../../../components/ui/Button";
import StatusLabel from "../../../components/ui/StatusLabel";
import BaseTable from "../../../components/table/BaseTable";

const ManagerProductsPage = () => {
  usePageTitle("Products - Manager");

  const [search, setSearch] = useState("");
  const [isStatus, setStatus] = useState("");

  const getStatusColor = (status) => {
    const statusLower = status.toLowerCase();
    if (statusLower === "available") return "purple";
    if (statusLower === "low") return "yellow";
    if (statusLower === "out of stock") return "pink";
    return "default";
  };

  const columns = [
    { header: "No", accessor: "id" },
    { header: "Name", accessor: "name" },
    {
      header: "Price",
      accessor: "price",
      render: (row) => <span>{formatRupiah(row.price)}</span>,
    },
    { header: "Stock", accessor: "stock" },
    { header: "Category", accessor: "category" },
    {
      header: "Status",
      accessor: "status",
      render: (row) => {
        const color = getStatusColor(row.status);
        return (
          <div className="flex justify-start">
            <StatusLabel variant={color} label={row.status} />
          </div>
        );
      },
    },
    {
      header: "Actions",
      accessor: "actions",
      sortable: false,
      isAction: true,
      render: (row) => (
        <button
          className="py-[7px] px-2 bg-purple text-white rounded-md cursor-pointer"
          onClick={() => handleActionModal}
        >
          <FiMoreHorizontal size={24} />
        </button>
      ),
    },
  ];

  const data = generateFakeData(100, (i) => ({
    id: i,
    name: `Product Aburing Sirs ${i}`,
    price: Math.floor(Math.random() * 20000) + 10000,
    stock: Math.floor(Math.random() * 50),
    category: ["Roti", "Minuman", "Snack"][i % 3],
    status: ["Low", "Out of Stock", "Available"][i % 3],
  }));

  const filteredData = data.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchStatus = isStatus
      ? p.status.toLowerCase() === isStatus.toLowerCase()
      : true;
    return matchSearch && matchStatus;
  });

  const {
    currentPage,
    itemsPerPage,
    totalItems,
    handlePageChange,
    handleItemsPerPageChange,
  } = usePagination(filteredData, 10);

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
                { value: "Available", label: "Available" },
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
        <BaseTable
          columns={columns}
          data={filteredData}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          onPageChange={handlePageChange}
          onItemsPerPageChange={handleItemsPerPageChange}
        />
      </div>
    </div>
  );
};

export default ManagerProductsPage;
