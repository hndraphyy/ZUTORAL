import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const TableFooter = ({
  currentPage,
  itemsPerPage,
  totalItems,
  onPageChange,
  onItemsPerPageChange,
  rowsOptions = [10, 25, 50],
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex items-center justify-between p-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-b-lg border-t-0">
      <div className="flex items-center space-x-2">
        <span className="font-semibold">Rows:</span>
        <select
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          className="p-1 rounded-md focus:outline-none border border-gray-400"
        >
          {rowsOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center space-x-4">
        <span className="whitespace-nowrap">
          {totalItems === 0
            ? "0 items"
            : `${startItem}-${endItem} of ${totalItems} Items`}
        </span>

        <div className="flex space-x-2">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-1 rounded-md transition duration-150 ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            <IoIosArrowBack size={20} />
          </button>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages || totalItems === 0}
            className={`p-1 rounded-md transition duration-150 ${
              currentPage === totalPages || totalItems === 0
                ? "text-gray-400 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            <IoIosArrowForward size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableFooter;
