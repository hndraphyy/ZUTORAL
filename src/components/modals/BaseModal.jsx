import { FiX } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";

export default function Modal({ isOpen, onClose, children }) {
  const [showModal, setShowModal] = useState(false);
  const [isEntering, setIsEntering] = useState(false);
  const hasOpened = useRef(false);

  useEffect(() => {
    if (isOpen && !hasOpened.current) {
      setShowModal(true);
      setIsEntering(false);
      hasOpened.current = true;

      const enterTimer = setTimeout(() => {
        setIsEntering(true);
      }, 10);

      return () => clearTimeout(enterTimer);
    } else if (!isOpen && hasOpened.current) {
      setIsEntering(false);
      const exitTimer = setTimeout(() => {
        setShowModal(false);
        hasOpened.current = false;
        onClose();
      }, 200);
      return () => clearTimeout(exitTimer);
    }
  }, [isOpen, onClose]);

  if (!showModal) return null;
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity duration-300 ease-out ${
        isEntering ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg  relative transform transition-all duration-300 ease-out ${
          isEntering ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500  hover:text-gray-800 cursor-pointer z-50"
        >
          <FiX size={24} />
        </button>
        {children}
      </div>
    </div>
  );
}
