import { useState } from "react";

const useActionModal = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (row) => {
    setSelectedRow(row);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedRow(null);
    setIsOpen(false);
  };

  return {
    isOpen,
    selectedRow,
    openModal,
    closeModal,
  };
};

export default useActionModal;
