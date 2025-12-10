import React, { useState, useMemo } from "react";
import { exportReportToPDF } from "../../utils/exportPDF";
import { REPORT_COLUMNS_BASE } from "./config/columns";
import usePagination from "../../hooks/usePagination";
import usePageTitle from "../../hooks/usePageTitle";
import useAuth from "../../hooks/useAuth";
import useDebounce from "../../hooks/useDebounce";
import { useReportData } from "./hooks/useReportData";

import Header from "../../components/Header";
import SearchInput from "../../components/filters/Search";
import FilterStatus from "../../components/filters/Status";
import Button from "../../components/ui/Button";
import BaseTable from "../../components/table/BaseTable";

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

  const { aggregatedData } = useReportData({
    isManager,
    user,
    isYear,
    debouncedSearch,
  });

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
            className="py-2 2xl:py-[7px] px-3 md:px-5 bg-purple text-white rounded-md cursor-pointer"
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
  } = usePagination(aggregatedData, aggregatedData.length);

  return (
    <div>
      <Header title="Reports" />
      <div
        className={
          isManager
            ? "mb-6 grid grid-cols-12 gap-3 grid-rows-2 lg:grid-rows-1"
            : "mb-6 grid grid-cols-12 gap-3 h-11"
        }
      >
        {isManager && (
          <SearchInput
            className="col-span-12 lg:col-span-8"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search name employee..."
          />
        )}
        <FilterStatus
          className={isManager ? "col-span-6 lg:col-span-2" : "col-span-6"}
          placeholder="Select Year"
          value={isYear}
          onChange={(e) => setYear(e.target.value)}
          options={yearOptions}
        />
        <Button
          onClick={() =>
            exportReportToPDF(aggregatedData, `Laporan_Tahunan_${isYear}`)
          }
          className={isManager ? "col-span-6 lg:col-span-2" : "col-span-6"}
          icon={<img src="/assets/svg/download.svg" alt="Download" />}
          label="Export All"
          classNameLabel="text-sm  2xl:text-[16px] leading-tight"
        />
      </div>
      {isManager ? (
        <>
          {search.trim() ? (
            <p className="pb-5 text-gray-600 text-xl">
              Employee Name: <b>{search}</b>
            </p>
          ) : (
            <p className="pb-5 text-gray-600 text-xl">All Employees</p>
          )}
        </>
      ) : (
        <></>
      )}

      <BaseTable
        columns={columns}
        data={aggregatedData}
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
