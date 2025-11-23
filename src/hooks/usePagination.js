import { useState, useMemo } from "react";

/**
 * Custom Hook untuk mengelola state dan logika pagination.
 * * @param {Array} data - Array data yang akan dipaginasi (setelah difilter/disorting).
 * @param {number} initialItemsPerPage - Jumlah item default per halaman (misalnya 10).
 * @returns {object} Objek yang berisi state, handler, dan data hasil paginasi.
 */
const usePagination = (data, initialItemsPerPage = 10) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleItemsPerPageChange = (newLimit) => {
    setItemsPerPage(newLimit);
    setCurrentPage(1); // Selalu reset ke halaman 1 saat batas berubah
  };

  // Hitung data yang harus ditampilkan di halaman saat ini
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return data.slice(startIndex, startIndex + itemsPerPage);
  }, [data, currentPage, itemsPerPage]);

  return {
    currentPage,
    itemsPerPage,
    totalItems,
    totalPages,
    paginatedData,
    handlePageChange,
    handleItemsPerPageChange,
    setCurrentPage,
  };
};

export default usePagination;
