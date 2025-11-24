import React, { useState, useMemo } from "react";
import { FaPlus } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
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

const ManagerEmployeesPage = () => {
  usePageTitle("Employees - Manager");

  const { isOpen, modalPos, openDropdown, closeDropdown } = useActionModal();

  const [search, setSearch] = useState("");
  const [isStatus, setStatus] = useState("");

  const formatStatusLabel = (status) => {
    return status === "active" ? "Active" : "Inactive";
  };

  const columns = [
    { header: "No", accessor: "id" },
    { header: "Name", accessor: "name" },
    { header: "Username", accessor: "username" },
    { header: "Email", accessor: "email" },
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

  const data = generateFakeData(100, (i) => ({
    id: i + 1,
    name: `Employee Sadirifan ${i}`,
    username: `employee${i}`,
    email: `employee${i}@example.com`,
    status: ["active", "inactive"][i % 2],
  }));

  const filteredData = useMemo(() => {
    return data.filter((p) => {
      const matchSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.username.toLowerCase().includes(search.toLowerCase()) ||
        p.email.toLowerCase().includes(search.toLowerCase());
      const matchStatus = isStatus ? p.status === isStatus : true;
      return matchSearch && matchStatus;
    });
  }, [data, search, isStatus]);

  const getStatusColor = (status) => {
    return status === "active" ? "green" : "pink";
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
      <Header title="Employees" />
      <div className="mb-6">
        <div className="grid grid-cols-12 grid-rows-2 lg:grid-rows-1 gap-3">
          <SearchInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="col-span-12 lg:col-span-8"
          />
          <FilterStatus
            className="col-span-6 lg:col-span-2"
            onChange={(e) => setStatus(e.target.value)}
            value={isStatus}
            options={[
              { value: "", label: "Status" },
              { value: "active", label: "Active" },
              { value: "inactive", label: "Inactive" },
            ]}
          />
          <Button
            onClick={() => alert("Add Employee clicked")}
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
        />
      )}
    </div>
  );
};

export default ManagerEmployeesPage;
