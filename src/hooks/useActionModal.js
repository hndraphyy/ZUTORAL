import { useState } from "react";

const useActionModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [modalPos, setModalPos] = useState({ top: 0, left: 0 });

  const openDropdown = (row, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSelectedRow(row);

    const isMobile = window.innerWidth < 768;

    const top = rect.bottom + window.scrollY + 6;
    const left = isMobile
      ? rect.left + window.scrollX - 20
      : rect.right + window.scrollX - 40;

    setModalPos({ top, left });
    setIsOpen(true);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return { isOpen, selectedRow, modalPos, openDropdown, closeDropdown };
};

export default useActionModal;
