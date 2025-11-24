import { useEffect, useRef } from "react";

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

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onClose]);

  return (
    <div
      ref={dropdownRef}
      className="absolute bg-white border border-gray-200 shadow-lg lg:w-22 rounded-md overflow-hidden z-50"
      style={{ top: pos.top, left: pos.left }}
    >
      {detailOn && (
        <button
          className="w-full py-2 px-4 text-sm 2xl:text-[15px] text-left text-gray-600 hover:bg-purple-light"
          onClick={onClickDetail}
        >
          Detail
        </button>
      )}
      <hr className="border border-gray-200" />
      {editOn && (
        <div>
          <button
            className="w-full py-2 px-4 text-sm 2xl:text-[15px] text-left text-gray-600 hover:bg-purple-light"
            onClick={onClickEdit}
          >
            Edit
          </button>
          <hr className="border border-gray-200" />
        </div>
      )}
      {deleteOn && (
        <button
          className="w-full py-2 px-4 text-sm 2xl:text-[15px] text-left text-red-500 hover:bg-purple-light"
          onClick={onClickDelete}
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default ActionDropdown;
