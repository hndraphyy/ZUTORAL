import React, { useState, useRef } from "react";
import html2pdf from "html2pdf.js";
import { generateFakeData } from "../../../utils/faker";
import { formatRupiah } from "../../../utils/format";
import usePagination from "../../../hooks/usePagination";
import usePageTitle from "../../../hooks/usePageTitle";

import Header from "../../../components/Header";
import FilterStatus from "../../../components/filters/Status";
import Button from "../../../components/ui/Button";
import BaseTable from "../../../components/table/BaseTable";

const ManagerReportsPage = () => {
  usePageTitle("Reports - Manager");

  const currentYear = new Date().getFullYear().toString();
  const [isYear, setYear] = useState(currentYear);
  const printRef = useRef();

  const getMonthName = (i) =>
    new Date(0, i).toLocaleString("en-US", { month: "long" });

  const columns = [
    { header: "Month", accessor: "month", sortable: false },
    { header: "Year", accessor: "year", sortable: false },
    { header: "Total Transactions", accessor: "transactions", sortable: false },
    {
      header: "Total Revenue",
      accessor: "revenue",
      sortable: false,
      render: (row) => <span>{formatRupiah(row.revenue)}</span>,
    },
    {
      header: "Actions",
      accessor: "actions",
      sortable: false,
      isAction: true,
      render: (row) => (
        <button
          onClick={(e) => openModal(row, e)}
          className="py-[5px] 2xl:py-[7px] px-3 bg-purple text-white rounded-md cursor-pointer "
        >
          <p className="flex items-center gap-2">
            <img src="/assets/svg/download.svg" alt="Download" />
            <span className="hidden md:block">Export</span>
          </p>
        </button>
      ),
    },
  ];

  const data = generateFakeData(12, (i) => ({
    id: i,
    year: isYear,
    month: getMonthName(i),
    transactions: Math.floor(150 + i * 10),
    revenue: 1530000 + i * 100,
  }));

  const filteredData = data.filter((p) => {
    const matchYear = isYear
      ? p.year.toLowerCase() === isYear.toLowerCase()
      : true;

    return matchYear;
  });

  const {
    currentPage,
    itemsPerPage,
    totalItems,
    handlePageChange,
    handleItemsPerPageChange,
  } = usePagination(filteredData, filteredData.length);

  return (
    <div>
      <Header title="Reports" />
      <div className="mb-6 grid grid-cols-12 gap-3 h-11">
        <FilterStatus
          className="col-span-6"
          placeholder="Select Year"
          value={isYear}
          onChange={(e) => setYear(e.target.value)}
          options={[
            { value: currentYear, label: currentYear },
            { value: "2024", label: "2024" },
            { value: "2023", label: "2023" },
            { value: "2022", label: "2022" },
          ]}
        />
        <Button
          className="col-span-6"
          icon={<img src="/assets/svg/download.svg" alt="Download" />}
          label="Export"
        />
      </div>

      <BaseTable
        columns={columns}
        data={filteredData}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        onPageChange={handlePageChange}
        onItemsPerPageChange={handleItemsPerPageChange}
        tableFooter={false}
      />
    </div>
  );
};

export default ManagerReportsPage;
