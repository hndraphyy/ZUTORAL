import { useState } from "react";

const useActionModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [modalPos, setModalPos] = useState({ top: 0, left: 0 });

  const openModal = (row, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSelectedRow(row);
    setModalPos({
      top: rect.bottom + 8,
      left: rect.left,
    });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return { isOpen, selectedRow, modalPos, openModal, closeModal };
};

export default useActionModal;
