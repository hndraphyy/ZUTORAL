import React, { useState, useMemo } from "react";
import { FaPlus } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { formatRupiah } from "../../../utils/format";
import useModal from "../../../hooks/useModal";
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
import ActionDropdown from "../../../components/modals/dropdown/ActionDropdown";
import Modal from "../../../components/modals/BaseModal";
import ConfirmDeleteModal from "../../../components/modals/ConfirmDeleteModal";
import ProductDetail from "../../../components/modals/manager-modal/products/ProductDetailModal";

const ManagerProductsPage = () => {
  usePageTitle("Products - Manager");

  const { isOpen, modalPos, selectedRow, openDropdown, closeDropdown } =
    useActionModal();
  const { isOpenModal, modalType, openModal, closeModal, payload } = useModal();

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
            label={formatStatusLabel(row.status)}
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
          onClick={(e) => openDropdown(row, e)}
          className="py-[5px] 2xl:py-[7px] px-1.5 2xl:px-2 bg-purple text-white rounded-md cursor-pointer"
        >
          <FiMoreHorizontal size={24} />
        </button>
      ),
    },
  ];

  const formatStatusLabel = (status) => {
    switch (status) {
      case "available":
        return "Available";
      case "low":
        return "Low Stock";
      case "out_of_stock":
        return "Out of Stock";
      default:
        return status;
    }
  };

  const data = generateFakeData(100, (i) => {
    const stock = (i * 5) % 50;

    let status = "available";
    if (stock === 0) status = "out_of_stock";
    else if (stock < 10) status = "low";

    return {
      id: i + 1,
      name: `Product Aburing Sirs ${i}`,
      price: 15000 + i * 100,
      stock,
      category: ["Roti", "Minuman", "Snack"][i % 3],
      status,
    };
  });

  const filteredData = useMemo(() => {
    return data.filter((p) => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchStatus = isStatus ? p.status === isStatus : true;
      return matchSearch && matchStatus;
    });
  }, [data, search, isStatus]);

  const getStatusColor = (status) => {
    return status === "available"
      ? "purple"
      : status === "low"
      ? "yellow"
      : "pink";
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
              { value: "", label: "Status" },
              { value: "available", label: "Available" },
              { value: "low", label: "Low Stock" },
              { value: "out_of_stock", label: "Out of Stock" },
            ]}
          />
          <Button
            onClick={() => alert("Add Product clicked")}
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
        {modalType === "detail" && payload && (
          <ProductDetail
            itemName={payload.name}
            itemPrice={formatRupiah(payload.price)}
            itemStock={payload.stock}
          />
        )}

        {modalType === "edit" && payload && (
          <div>
            <h2 className="text-lg font-semibold mb-3">Edit Product</h2>
            <input
              type="text"
              defaultValue={payload.name}
              className="border p-2 rounded w-full mb-3"
            />
            <Button onClick={closeModal} label="Save" />
          </div>
        )}

        {modalType === "delete" && payload && (
          <ConfirmDeleteModal onCancel={closeModal} itemName={payload.name} />
        )}
      </Modal>
    </div>
  );
};

export default ManagerProductsPage;
