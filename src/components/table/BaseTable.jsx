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
    if (sortColumn === accessor) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(accessor);
      setSortDirection("asc");
    }
  };

  const sortedData = useMemo(() => {
    if (!sortColumn) return data;
    return [...data].sort((a, b) => {
      let A = a[sortColumn];
      let B = b[sortColumn];
      if (!isNaN(A)) A = Number(A);
      if (!isNaN(B)) B = Number(B);
      if (typeof A === "string") A = A.toLowerCase();
      if (typeof B === "string") B = B.toLowerCase();
      if (A < B) return sortDirection === "asc" ? -1 : 1;
      if (A > B) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortColumn, sortDirection]);

  const paginatedData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full mb-6">
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
                  className={`p-4 font-semibold ${
                    col.sortable !== false ? "cursor-pointer" : "cursor-default"
                  } text-gray-700 text-sm 2xl:text-[16px] whitespace-nowrap`}
                >
                  <div
                    className={`flex items-center ${
                      col.isAction ? "justify-center" : "justify-between"
                    }`}
                  >
                    {col.header}
                    {col.sortable !== false && (
                      <TbArrowsSort
                        className={`ml-2 ${
                          sortColumn === col.accessor
                            ? "text-gray-800"
                            : "text-gray-400"
                        }`}
                      />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="text-center py-6">
                  No Data Available
                </td>
              </tr>
            ) : (
              paginatedData.map((row, idx) => (
                <tr
                  key={row.id || idx}
                  className={`border-t border-gray-200 ${
                    idx % 2 === 0 ? "bg-purple-light" : "bg-white"
                  }`}
                >
                  {columns.map((col, ci) => (
                    <td
                      key={ci}
                      className={`px-4 py-3 text-gray-700 text-sm 2xl:text-[16px] ${
                        col.isAction ? "text-center" : ""
                      }`}
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
