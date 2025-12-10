import React, { useState, useMemo } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { CUSTOMER_COLUMNS_BASE } from "./config/columns";
import { generateCustomerData } from "./data/customerData";

import useModal from "../../../hooks/useModal";
import useActionModal from "../../../hooks/useActionModal";
import usePagination from "../../../hooks/usePagination";
import usePageTitle from "../../../hooks/usePageTitle";
import useDebounce from "../../../hooks/useDebounce";

import Header from "../../../components/Header";
import SearchInput from "../../../components/filters/Search";
import FilterDate from "../../../components/filters/Date";
import Button from "../../../components/ui/Button";
import BaseTable from "../../../components/table/BaseTable";
import ActionDropdown from "../../../components/modals/dropdown/ActionDropdown";
import Modal from "../../../components/modals/BaseModal";
import ConfirmDeleteModal from "../../../components/modals/ConfirmDeleteModal";
import CustomerFormModal from "./form/CustomerFormModal";

const SalesAgentCustomersPage = () => {
  usePageTitle("Customers - Sales Agent");

  const { isOpen, modalPos, selectedRow, openDropdown, closeDropdown } =
    useActionModal();
  const { isOpenModal, modalType, openModal, closeModal, payload } = useModal();

  const [search, setSearch] = useState("");
  const [isDate, setDate] = useState("");
  const debouncedSearch = useDebounce(search, 500);

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
            onClick={(e) => {
              e.stopPropagation();
              openDropdown(row, e);
            }}
            className="py-[5px] 2xl:py-[7px] px-1.5 2xl:px-2 bg-purple text-white rounded-md cursor-pointer hover:bg-purple-700 transition"
            aria-label="Open customer actions"
          >
            <FiMoreHorizontal size={24} />
          </button>
        ),
      },
    ];
  }, [openDropdown]);

  const filteredData = useMemo(() => {
    return data.filter((customer) => {
      const name = (customer.name || "").toLowerCase();
      const phone = (customer.phone || "").toLowerCase();
      const email = (customer.email || "").toLowerCase();
      const searchTerm = debouncedSearch.toLowerCase();

      const matchSearch =
        name.includes(searchTerm) ||
        phone.includes(searchTerm) ||
        email.includes(searchTerm);
      const matchDate = isDate ? customer.joinDate === isDate : true;
      return matchSearch && matchDate;
    });
  }, [data, debouncedSearch, search, isDate]);

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
            placeholder="Search by name, phone, or email..."
            className="col-span-12 lg:col-span-8"
          />
          <FilterDate
            value={isDate}
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
          editOn
          deleteOn
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
        {modalType === "add" ? (
          <CustomerFormModal
            mode="add"
            onSave={(newCustomer) => {
              console.log("Add Customer:", newCustomer);
              closeModal();
            }}
            onCancel={closeModal}
          />
        ) : modalType === "edit" && payload ? (
          <CustomerFormModal
            mode="edit"
            customer={payload}
            onSave={(updatedCustomer) => {
              console.log("Edit Customer:", updatedCustomer);
              closeModal();
            }}
            onCancel={closeModal}
          />
        ) : modalType === "detail" && payload ? (
          <CustomerFormModal
            mode="view"
            customer={payload}
            onCancel={closeModal}
          />
        ) : modalType === "delete" && payload ? (
          <ConfirmDeleteModal
            itemName={payload.name}
            onConfirm={() => {
              console.log("Delete Customer ID:", payload.id);
              closeModal();
            }}
            onCancel={closeModal}
          />
        ) : null}
      </Modal>
    </div>
  );
};

export default SalesAgentCustomersPage;
