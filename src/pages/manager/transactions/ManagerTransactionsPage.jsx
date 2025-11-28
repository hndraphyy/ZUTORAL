import React, { useState, useMemo } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { TRANSACTION_COLUMNS_BASE } from "./config/columns.jsx";
import { generateTransactionData } from "./data/transactionData.js";
import useModal from "../../../hooks/useModal.js";

import useActionModal from "../../../hooks/useActionModal";
import usePagination from "../../../hooks/usePagination";
import usePageTitle from "../../../hooks/usePageTitle";
import Header from "../../../components/Header";
import SearchInput from "../../../components/filters/Search";
import FilterDate from "../../../components/filters/Date";
import FilterStatus from "../../../components/filters/Status";
import BaseTable from "../../../components/table/BaseTable";
import ActionDropdown from "../../../components/modals/dropdown/ActionDropdown";
import Modal from "../../../components/modals/BaseModal.jsx";
import ConfirmDeleteModal from "../../../components/modals/ConfirmDeleteModal.jsx";
import TransactionDetail from "./detail/TransactionDetail.jsx";

const ManagerTransactionsPage = () => {
  usePageTitle("Transactions - Manager");

  const { isOpen, modalPos, selectedRow, openDropdown, closeDropdown } =
    useActionModal();
  const { isOpenModal, modalType, openModal, closeModal, payload } = useModal();
  const [search, setSearch] = useState("");
  const [isStatus, setStatus] = useState("");
  const [isDate, setDate] = useState("");

  const data = generateTransactionData(100);

  const columns = useMemo(() => {
    return [
      ...TRANSACTION_COLUMNS_BASE,
      {
        header: "Actions",
        accessor: "actions",
        sortable: false,
        isAction: true,
        render: (row) => (
          <button
            onClick={(e) => openDropdown(row, e)}
            className="py-[5px] 2xl:py-[7px] px-1.5 2xl:px-2 bg-purple text-white rounded-md cursor-pointer"
          >
            <FiMoreHorizontal size={24} />
          </button>
        ),
      },
    ];
  }, [openDropdown]);

  const filteredData = useMemo(() => {
    return data.filter((p) => {
      const matchSearch =
        p.customer.toLowerCase().includes(search.toLowerCase()) ||
        p.sales.toLowerCase().includes(search.toLowerCase());
      const matchDate = isDate ? p.date === isDate : true;
      const matchStatus = isStatus ? p.status === isStatus : true;
      return matchSearch && matchStatus && matchDate;
    });
  }, [data, search, isStatus, isDate]);

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
            className="col-span-6 lg:col-span-2"
          />
          <FilterStatus
            className="col-span-6 lg:col-span-2"
            onChange={(e) => setStatus(e.target.value)}
            value={isStatus}
            options={[
              { value: "", label: "Status" },
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
        <ActionDropdown
          onClose={closeDropdown}
          pos={modalPos}
          detailOn
          deleteOn
          onClickDetail={() => {
            openModal("detail", selectedRow);
            closeDropdown();
          }}
          onClickDelete={() => {
            openModal("delete", selectedRow);
            closeDropdown();
          }}
        />
      )}
      <Modal isOpen={isOpenModal} onClose={closeModal}>
        {modalType === "detail" && payload && (
          <TransactionDetail transaction={payload} onCancel={closeModal} />
        )}

        {modalType === "delete" && payload && (
          <ConfirmDeleteModal
            onCancel={closeModal}
            onConfirm={closeModal}
            itemName={payload.customer}
          />
        )}
      </Modal>
    </div>
  );
};

export default ManagerTransactionsPage;
