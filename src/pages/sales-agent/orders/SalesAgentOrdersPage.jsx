import React, { useState, useMemo } from "react";
import { FaPlus } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { ORDERS_COLUMNS_BASE } from "./config/columns";
import { generateOrdersData } from "./data/ordersData";
import useModal from "../../../hooks/useModal";
import useActionModal from "../../../hooks/useActionModal";
import usePagination from "../../../hooks/usePagination";
import usePageTitle from "../../../hooks/usePageTitle";

import Header from "../../../components/Header";
import SearchInput from "../../../components/filters/Search";
import FilterDate from "../../../components/filters/Date";
import FilterStatus from "../../../components/filters/Status";
import Button from "../../../components/ui/Button";
import Modal from "../../../components/modals/BaseModal";
import ActionDropdown from "../../../components/modals/dropdown/ActionDropdown";
import ConfirmDeleteModal from "../../../components/modals/ConfirmDeleteModal";
import BaseTable from "../../../components/table/BaseTable";
import OrderFormModal from "./form/OrdersFormModal";

const SalesAgentOrdersPage = () => {
  usePageTitle("Orders - SalesAgent");

  const { isOpen, modalPos, selectedRow, openDropdown, closeDropdown } =
    useActionModal();
  const { isOpenModal, modalType, openModal, closeModal, payload } = useModal();

  const [search, setSearch] = useState("");
  const [isStatus, setStatus] = useState("");
  const [isDate, setDate] = useState("");

  const data = useMemo(() => generateOrdersData(100), []);

  const columns = useMemo(() => {
    return [
      ...ORDERS_COLUMNS_BASE,
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
            aria-label="Open actions menu"
          >
            <FiMoreHorizontal size={24} />
          </button>
        ),
      },
    ];
  }, [openDropdown]);

  const filteredData = useMemo(() => {
    return data.filter((order) => {
      const matchSearch = order.customer
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchDate = isDate ? order.date === isDate : true;
      const matchStatus = isStatus ? order.status === isStatus : true;
      return matchSearch && matchDate && matchStatus;
    });
  }, [data, search, isDate, isStatus]);

  const {
    currentPage,
    itemsPerPage,
    totalItems,
    handlePageChange,
    handleItemsPerPageChange,
  } = usePagination(filteredData, 10);

  return (
    <div>
      <Header title="Orders" />
      <div className="mb-6">
        <div className="grid grid-cols-12 grid-rows-2 lg:grid-rows-1 gap-2.5">
          <SearchInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by customer..."
            className="col-span-12 lg:col-span-6"
          />
          <FilterDate
            value={isDate}
            onChange={(e) => setDate(e.target.value)}
            className="col-span-4 lg:col-span-2"
          />
          <FilterStatus
            value={isStatus}
            onChange={(e) => setStatus(e.target.value)}
            className="col-span-4 lg:col-span-2"
            options={[
              { value: "", label: "Status" },
              { value: "paid", label: "Paid" },
              { value: "pending", label: "Pending" },
              { value: "cancelled", label: "Cancelled" },
            ]}
          />
          <Button
            onClick={() => openModal("add")}
            icon={<FaPlus />}
            label="Add"
            className="col-span-4 lg:col-span-2"
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
          <OrderFormModal
            mode="add"
            onSave={(newOrder) => {
              console.log("Add Order:", newOrder);
              closeModal();
            }}
            onCancel={closeModal}
          />
        ) : modalType === "detail" && payload ? (
          <OrderFormModal order={payload} mode="view" onCancel={closeModal} />
        ) : modalType === "edit" && payload ? (
          <OrderFormModal
            order={payload}
            mode="edit"
            onSave={(updatedOrder) => {
              console.log("Edit Order:", updatedOrder);
              closeModal();
            }}
            onCancel={closeModal}
          />
        ) : modalType === "delete" && payload ? (
          <ConfirmDeleteModal
            itemName={payload.customer}
            onConfirm={() => {
              console.log("Delete Order:", payload.id);
              closeModal();
            }}
            onCancel={closeModal}
          />
        ) : null}
      </Modal>
    </div>
  );
};

export default SalesAgentOrdersPage;
