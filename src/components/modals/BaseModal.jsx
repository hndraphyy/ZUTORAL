import { FiX } from "react-icons/fi";
import { useState, useEffect } from "react";

export default function Modal({ isOpen, onClose, children }) {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) setIsClosing(false);
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 200);
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={handleClose}
      className={`fixed inset-0 z-50 flex items-center justify-center 
      bg-black/30 transition-opacity duration-200
      ${isClosing ? "opacity-0" : "opacity-100"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-lg w-full max-w-[320px] md:max-w-md p-5 relative
        transition-all duration-200 ease-out
        ${
          isClosing ? "opacity-0 -translate-y-5" : "opacity-100 translate-y-0"
        }`}
      >
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 cursor-pointer"
        >
          <FiX size={24} />
        </button>
        {children}
      </div>
    </div>
  );
}
