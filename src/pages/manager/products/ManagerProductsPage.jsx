import React, { useState, useMemo } from "react";
import { FaPlus } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { PRODUCT_COLUMNS_BASE } from "./config/columns";
import { generateProductData } from "./data/productData";
import useModal from "../../../hooks/useModal";
import useActionModal from "../../../hooks/useActionModal";
import usePagination from "../../../hooks/usePagination";
import usePageTitle from "../../../hooks/usePageTitle";
import useDebounce from "../../../hooks/useDebounce";

import Header from "../../../components/Header";
import SearchInput from "../../../components/filters/Search";
import FilterStatus from "../../../components/filters/Status";
import Button from "../../../components/ui/Button";
import BaseTable from "../../../components/table/BaseTable";
import ActionDropdown from "../../../components/modals/dropdown/ActionDropdown";
import Modal from "../../../components/modals/BaseModal";
import ConfirmDeleteModal from "../../../components/modals/ConfirmDeleteModal";
import ProductFormModal from "./form/ProductFormModal";

const ManagerProductsPage = () => {
  usePageTitle("Products - Manager");

  const { isOpen, modalPos, selectedRow, openDropdown, closeDropdown } =
    useActionModal();
  const { isOpenModal, modalType, openModal, closeModal, payload } = useModal();

  const [search, setSearch] = useState("");
  const [isStatus, setStatus] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const data = useMemo(() => generateProductData(100), []);

  const columns = useMemo(() => {
    return [
      ...PRODUCT_COLUMNS_BASE,
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
            aria-label="Open product actions"
          >
            <FiMoreHorizontal size={24} />
          </button>
        ),
      },
    ];
  }, [openDropdown]);

  const filteredData = useMemo(() => {
    return data.filter((product) => {
      const name = (product.name || "").toLowerCase();
      const searchTerm = debouncedSearch.toLowerCase();

      const matchSearch = debouncedSearch
        ? name.includes(debouncedSearch.toLowerCase(searchTerm))
        : true;
      const matchStatus = isStatus ? product.status === isStatus : true;
      return matchSearch && matchStatus;
    });
  }, [data, debouncedSearch, isStatus]);

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
            placeholder="Search by product name..."
            className="col-span-12 lg:col-span-8"
          />
          <FilterStatus
            value={isStatus}
            onChange={(e) => setStatus(e.target.value)}
            className="col-span-6 lg:col-span-2"
            options={[
              { value: "", label: "Status" },
              { value: "available", label: "Available" },
              { value: "low", label: "Low Stock" },
              { value: "out_of_stock", label: "Out of Stock" },
            ]}
          />
          <Button
            onClick={() => openModal("add")}
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
          <ProductFormModal
            mode="add"
            onSave={(newProduct) => {
              console.log("Add Product:", newProduct);
              closeModal();
            }}
            onCancel={closeModal}
          />
        ) : modalType === "detail" && payload ? (
          <ProductFormModal
            product={payload}
            mode="view"
            onCancel={closeModal}
          />
        ) : modalType === "edit" && payload ? (
          <ProductFormModal
            product={payload}
            mode="edit"
            onSave={(updatedProduct) => {
              console.log("Edit Product:", updatedProduct);
              closeModal();
            }}
            onCancel={closeModal}
          />
        ) : modalType === "delete" && payload ? (
          <ConfirmDeleteModal
            itemName={payload.name}
            onConfirm={() => {
              console.log("Delete Product ID:", payload.id);
              closeModal();
            }}
            onCancel={closeModal}
          />
        ) : null}
      </Modal>
    </div>
  );
};

export default ManagerProductsPage;
