import { useEffect, useRef, useState } from "react";

const ActionDropdown = ({
  onClose,
  pos,
  detailOn,
  editOn,
  deleteOn,
  onClickDetail,
  onClickEdit,
  onClickDelete,
}) => {
  const dropdownRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsVisible(false);
        setTimeout(onClose, 150);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onClose]);

  const handleAction = (action) => {
    setIsVisible(false);
    setTimeout(() => {
      action();
      onClose();
    }, 150);
  };

  return (
    <div
      ref={dropdownRef}
      className="absolute bg-white border border-gray-200 shadow-lg lg:w-22 rounded-md overflow-hidden z-50 transition-all duration-150 ease-out"
      style={{
        top: pos.top,
        left: pos.left,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scale(1)" : "scale(0.95)",
        pointerEvents: isVisible ? "auto" : "none'",
      }}
    >
      {detailOn && (
        <button
          className="w-full py-2 px-4 text-sm 2xl:text-[15px] text-left text-gray-600 hover:bg-purple-light"
          onClick={() => handleAction(onClickDetail)}
        >
          Detail
        </button>
      )}
      {detailOn && editOn && <hr className="border border-gray-200" />}
      {editOn && (
        <button
          className="w-full py-2 px-4 text-sm 2xl:text-[15px] text-left text-gray-600 hover:bg-purple-light"
          onClick={() => handleAction(onClickEdit)}
        >
          Edit
        </button>
      )}
      {(detailOn || editOn) && deleteOn && (
        <hr className="border border-gray-200" />
      )}
      {deleteOn && (
        <button
          className="w-full py-2 px-4 text-sm 2xl:text-[15px] text-left text-red-500 hover:bg-purple-light"
          onClick={() => handleAction(onClickDelete)}
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default ActionDropdown;
