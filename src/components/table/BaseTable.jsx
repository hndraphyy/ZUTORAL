import React, { useState, useMemo } from "react";
import { TbArrowsSort } from "react-icons/tb";
import TableFooter from "./TableFooter";

const BaseTable = ({
  columns = [],
  data = [],
  currentPage,
  itemsPerPage,
  totalItems,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSort = (accessor) => {
    if (sortColumn !== accessor) {
      setSortColumn(accessor);
      setSortDirection("asc");
      return;
    }
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  const sortedData = useMemo(() => {
    if (!sortColumn) return data;

    return [...data].sort((a, b) => {
      let valA = a[sortColumn];
      let valB = b[sortColumn];

      if (!isNaN(valA) && !isNaN(valB)) {
        valA = Number(valA);
        valB = Number(valB);
      } else if (typeof valA === "string" && typeof valB === "string") {
        valA = valA.toLowerCase();
        valB = valB.toLowerCase();
      }

      if (valA < valB) return sortDirection === "asc" ? -1 : 1;
      if (valA > valB) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortColumn, sortDirection]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = sortedData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="w-full">
      <div className="overflow-x-auto border border-gray-200 rounded-t-lg">
        <table className="min-w-full text-left">
          <thead>
            <tr>
              {columns.map((col, i) => (
                <th
                  key={i}
                  onClick={() =>
                    col.sortable !== false && handleSort(col.accessor)
                  }
                  className={`p-4 font-semibold text-gray-700 text-sm 2xl:text-[16px] select-none whitespace-nowrap 
                    ${
                      col.sortable === false
                        ? "cursor-default"
                        : "cursor-pointer"
                    }
                  `}
                >
                  {col.sortable !== false ? (
                    <div className="flex items-center justify-between">
                      <span>{col.header}</span>
                      <span className="inline-flex items-center ml-2">
                        <TbArrowsSort
                          className={
                            sortColumn === col.accessor
                              ? "text-gray-800"
                              : "text-gray-400"
                          }
                        />
                      </span>
                    </div>
                  ) : (
                    <div
                      className={`flex items-center ${
                        col.isAction ? "justify-center" : "justify-start"
                      }`}
                    >
                      {col.header}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {paginatedData.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="text-center py-6 text-gray-500"
                >
                  No Data Available
                </td>
              </tr>
            ) : (
              paginatedData.map((row, idx) => (
                <tr
                  key={row.id || idx}
                  className={`border-t border-border-table ${
                    idx % 2 === 0 ? "bg-purple-light" : "bg-white"
                  }`}
                >
                  {columns.map((col, ci) => (
                    <td
                      key={ci}
                      className={`
                          px-4 py-3 text-gray-700 text-sm 2xl:text-[16px]
                          ${col.isAction ? "text-center" : ""}
                        `}
                    >
                      {col.render ? col.render(row) : row[col.accessor]}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <TableFooter
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        onPageChange={onPageChange}
        onItemsPerPageChange={onItemsPerPageChange}
      />
    </div>
  );
};

export default BaseTable;
