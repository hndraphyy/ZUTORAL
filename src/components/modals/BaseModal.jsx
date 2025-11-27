import { FiX } from "react-icons/fi";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg  relative"
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
