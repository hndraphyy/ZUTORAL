import React, { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { formatRupiah } from "../../../utils/format";
import { generateFakeData } from "../../../utils/faker";
import useActionModal from "../../../hooks/useActionModal";
import usePagination from "../../../hooks/usePagination";
import usePageTitle from "../../../hooks/usePageTitle";

import Header from "../../../components/Header";
import SearchInput from "../../../components/filters/Search";
import FilterDate from "../../../components/filters/Date";
import FilterStatus from "../../../components/filters/Status";
import StatusLabel from "../../../components/ui/StatusLabel";
import BaseTable from "../../../components/table/BaseTable";
import ActionDropdown from "../../../components/modal/dropdown/ActionDropdown";

const ManagerTransactionsPage = () => {
  usePageTitle("Transactions - Manager");

  const { isOpen, modalPos, openModal, closeModal } = useActionModal();

  const [search, setSearch] = useState("");
  const [isStatus, setStatus] = useState("");
  const [isDate, setDate] = useState("");

  const columns = [
    { header: "No", accessor: "id" },
    { header: "Invoice", accessor: "invoice" },
    { header: "Customer", accessor: "customer" },
    { header: "Sales", accessor: "sales" },
    {
      header: "Total",
      accessor: "total",
      render: (row) => <span>{formatRupiah(row.total)}</span>,
    },
    { header: "Date", accessor: "date" },
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
    id: i + 1,
    invoice: `INV/${1000 + i}`,
    customer: `Customer Adi Satya ${i}`,
    sales: `Sales Person ${i}`,
    total: 1530000 + i * 100,
    date: `2025-11-${String((i % 30) + 1).padStart(2, "0")}`,
    status: ["Completed", "Pending", "Failed"][i % 3],
  }));

  const filteredData = data.filter((p) => {
    const matchSearch =
      p.customer.toLowerCase().includes(search.toLowerCase()) ||
      p.sales.toLowerCase().includes(search.toLowerCase());
    const matchDate = isDate ? p.date === isDate : true;
    const matchStatus = isStatus
      ? p.status.toLowerCase() === isStatus.toLowerCase()
      : true;

    return matchSearch && matchStatus && matchDate;
  });

  const getStatusColor = (status) => {
    const s = status.toLowerCase();
    return s === "completed" ? "green" : s === "pending" ? "yellow" : "pink";
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
      <Header title="Transactions" />
      <div className="mb-6">
        <div className="grid grid-cols-12 grid-rows-2 lg:grid-rows-1 gap-3">
          <SearchInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="col-span-12 lg:col-span-8"
          />
          <FilterDate
            onChange={(e) => setDate(e.target.value)}
            value={isDate}
            className="col-span-4 lg:col-span-2"
          />
          <FilterStatus
            className="col-span-4 lg:col-span-2"
            onChange={(e) => setStatus(e.target.value)}
            options={[
              { value: "completed", label: "Completed" },
              { value: "pending", label: "Pending" },
              { value: "failed", label: "Failed" },
            ]}
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
        <ActionDropdown onClose={closeModal} pos={modalPos} detailOn deleteOn />
      )}
    </div>
  );
};

export default ManagerTransactionsPage;
