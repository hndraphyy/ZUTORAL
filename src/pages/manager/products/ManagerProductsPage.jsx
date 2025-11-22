import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { formatRupiah } from "../../../utils/format";
import { generateFakeData } from "../../../utils/faker";

import useActionModal from "../../../hooks/useActionModal";
import usePagination from "../../../hooks/usePagination";
import usePageTitle from "../../../hooks/usePageTitle";

import Header from "../../../components/Header";
import SearchInput from "../../../components/filters/Search";
import FilterStatus from "../../../components/filters/Status";
import Button from "../../../components/ui/Button";
import StatusLabel from "../../../components/ui/StatusLabel";
import BaseTable from "../../../components/table/BaseTable";
import ActionDropdown from "../../../components/modal/dropdown/ActionDropdown";

const ManagerProductsPage = () => {
  usePageTitle("Products - Manager");

  const { isOpen, modalPos, openModal, closeModal } = useActionModal();

  const [search, setSearch] = useState("");
  const [isStatus, setStatus] = useState("");

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
      render: (row) => (
        <div className="flex justify-start">
          <StatusLabel
            variant={getStatusColor(row.status)}
            label={row.status}
          />
        </div>
      ),
    },
    {
      header: "Actions",
      accessor: "actions",
      sortable: false,
      isAction: true,
      render: (row) => (
        <button
          onClick={(e) => openModal(row, e)}
          className="py-[5px] 2xl:py-[7px] px-1.5 2xl:px-2 bg-purple text-white rounded-md cursor-pointer"
        >
          <FiMoreHorizontal size={24} />
        </button>
      ),
    },
  ];

  const data = generateFakeData(100, (i) => ({
    id: i,
    name: `Product Aburing Sirs ${i}`,
    price: 15000 + i * 100,
    stock: (i * 3) % 50,
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

  const getStatusColor = (status) => {
    const s = status.toLowerCase();
    return s === "available" ? "purple" : s === "low" ? "yellow" : "pink";
  };

  const {
    currentPage,
    itemsPerPage,
    totalItems,
    handlePageChange,
    handleItemsPerPageChange,
  } = usePagination(filteredData, 10);

  return (
    <div>
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
              { value: "Low", label: "Low" },
              { value: "Out of Stock", label: "Out of Stock" },
            ]}
          />
          <Button
            onAdd={() => alert("Add clicked")}
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

      {isOpen && (
        <ActionDropdown
          onClose={closeModal}
          pos={modalPos}
          detailOn
          editOn
          deleteOn
        />
      )}
    </div>
  );
};

export default ManagerProductsPage;
