import React, { useState, useMemo, useEffect } from "react";
import { exportReportToPDF } from "../../utils/exportPDF.js";
import { REPORT_COLUMNS_BASE } from "./config/columns.jsx";
import usePagination from "../../hooks/usePagination.js";
import usePageTitle from "../../hooks/usePageTitle.js";
import useAuth from "../../hooks/useAuth.js";
import useDebounce from "../../hooks/useDebounce.js";

import Header from "../../components/Header.jsx";
import SearchInput from "../../components/filters/Search.jsx";
import FilterStatus from "../../components/filters/Status.jsx";
import Button from "../../components/ui/Button.jsx";
import BaseTable from "../../components/table/BaseTable.jsx";

const getMonthName = (monthIndex) =>
  new Date(0, monthIndex).toLocaleString("en-US", { month: "long" });

const ReportsPage = () => {
  const { getCurrentUser } = useAuth();
  const user = getCurrentUser();
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  if (!user) {
    return (
      <div className="p-6">
        <p className="text-red-500">You must be logged in to view reports.</p>
      </div>
    );
  }

  const pageTitle =
    user.role === "manager" ? "Reports - Manager " : "Reports - Sales Agent";
  usePageTitle(pageTitle);

  const isManager = user.role === "manager";
  const currentYear = new Date().getFullYear().toString();
  const [isYear, setYear] = useState(currentYear);

  const yearOptions = Array.from({ length: 6 }, (_, i) => {
    const year = new Date().getFullYear() - i;
    return { value: year.toString(), label: year.toString() };
  });

  const data = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      year: isYear,
      month: getMonthName(i),
      transactions: isManager
        ? Math.floor(300 + i * 15)
        : Math.floor(150 + i * 10),
      revenue: isManager ? 5_000_000 + i * 200_000 : 1_530_000 + i * 100_000,
    }));
  }, [isYear, user.role]);

  const filteredData = useMemo(() => {
    if (!debouncedSearch.trim()) return data;
    return data.filter((item) =>
      item.month.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [data, debouncedSearch]);

  const columns = useMemo(() => {
    return [
      ...REPORT_COLUMNS_BASE,
      {
        header: "Actions",
        accessor: "actions",
        sortable: false,
        isAction: true,
        render: (row) => (
          <button
            onClick={(e) => {
              e.stopPropagation();
              exportReportToPDF([row], `Laporan_${row.month}_${row.year}`);
            }}
            className="py-[5px] 2xl:py-[7px] px-3 bg-purple text-white rounded-md cursor-pointer"
          >
            <p className="flex items-center gap-2">
              <img src="/assets/svg/download.svg" alt="Download" />
              <span className="hidden md:block">Export</span>
            </p>
          </button>
        ),
      },
    ];
  }, [user.role]);

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
      <div className="mb-6 grid grid-cols-12 gap-3">
        {isManager && (
          <SearchInput
            className="col-span-8"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search name employee..."
          />
        )}
        <FilterStatus
          className={isManager ? "col-span-2" : "col-span-6"}
          placeholder="Select Year"
          value={isYear}
          onChange={(e) => setYear(e.target.value)}
          options={yearOptions}
        />
        <Button
          onClick={() => exportReportToPDF(data, `Laporan_Tahunan_${isYear}`)}
          className={isManager ? "col-span-2" : "col-span-6"}
          icon={<img src="/assets/svg/download.svg" alt="Download" />}
          label="Export All"
          classNameLabel="hidden xl:block text-sm 2xl:text-[16px] leading-tight"
        />
      </div>
      {search.trim() ? (
        <p className="pb-5 text-gray-600 text-xl">{search}</p>
      ) : (
        <p className="pb-5 text-gray-600 text-xl">All Employees</p>
      )}

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

export default ReportsPage;
