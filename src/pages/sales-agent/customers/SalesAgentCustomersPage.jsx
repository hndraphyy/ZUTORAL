import React, { useState, useMemo } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { CUSTOMER_COLUMNS_BASE } from "./config/columns.jsx";
import { generateCustomerData } from "./data/customerData.js";

import useModal from "../../../hooks/useModal.js";
import useActionModal from "../../../hooks/useActionModal.js";
import usePagination from "../../../hooks/usePagination.js";
import usePageTitle from "../../../hooks/usePageTitle.js";
import Header from "../../../components/Header.jsx";
import SearchInput from "../../../components/filters/Search.jsx";
import FilterDate from "../../../components/filters/Date.jsx";
import Button from "../../../components/ui/Button.jsx";
import BaseTable from "../../../components/table/BaseTable.jsx";
import ActionDropdown from "../../../components/modals/dropdown/ActionDropdown.jsx";
import Modal from "../../../components/modals/BaseModal.jsx";
import ConfirmDeleteModal from "../../../components/modals/ConfirmDeleteModal.jsx";
import CustomerFormModal from "./form/CustomerFormModal.jsx";

const SalesAgentCustomersPage = () => {
  usePageTitle("Customers - SalesAgent");

  const { isOpen, modalPos, selectedRow, openDropdown, closeDropdown } =
    useActionModal();
  const { isOpenModal, modalType, openModal, closeModal, payload } = useModal();
  const [search, setSearch] = useState("");
  const [isDate, setDate] = useState("");

  const data = useMemo(() => generateCustomerData(100), []);

  const columns = useMemo(() => {
    return [
      ...CUSTOMER_COLUMNS_BASE,
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
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.phone.toLowerCase().includes(search.toLowerCase()) ||
        p.email.toLowerCase().includes(search.toLowerCase());
      const matchDate = isDate ? p.joinDate === isDate : true;
      return matchSearch && matchDate;
    });
  }, [data, search, isDate]);

  const handleAddCustomer = () => {
    openModal("add");
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
      <Header title="Customers" />
      <div className="mb-6">
        <div className="grid grid-cols-12 grid-rows-2 lg:grid-rows-1 gap-3">
          <SearchInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="col-span-12 lg:col-span-8"
          />
          <FilterDate
            onChange={(e) => setDate(e.target.value)}
            className="col-span-6 lg:col-span-2"
          />
          <Button
            onClick={handleAddCustomer}
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
          onClose={closeDropdown}
          pos={modalPos}
          detailOn
          deleteOn
          editOn
          onClickDetail={() => {
            openModal("detail", selectedRow);
            closeDropdown();
          }}
          onClickEdit={() => {
            openModal("edit", selectedRow);
            closeDropdown();
          }}
          onClickDelete={() => {
            openModal("delete", selectedRow);
            closeDropdown();
          }}
        />
      )}
      <Modal isOpen={isOpenModal} onClose={closeModal}>
        {modalType === "add" && (
          <CustomerFormModal
            mode="add"
            onSave={(data) => {
              console.log("Add customer:", data);
              closeModal();
            }}
            onCancel={closeModal}
          />
        )}
        {modalType === "edit" && payload && (
          <CustomerFormModal
            mode="edit"
            customer={payload}
            onSave={(data) => {
              console.log("Edit customer:", data);
              closeModal();
            }}
            onCancel={closeModal}
          />
        )}
        {modalType === "detail" && payload && (
          <CustomerFormModal
            mode="view"
            customer={payload}
            onCancel={closeModal}
          />
        )}
        {modalType === "delete" && payload && (
          <ConfirmDeleteModal
            itemName={payload.name}
            onConfirm={() => {
              closeModal();
            }}
            onCancel={closeModal}
          />
        )}
      </Modal>
    </div>
  );
};

export default SalesAgentCustomersPage;
