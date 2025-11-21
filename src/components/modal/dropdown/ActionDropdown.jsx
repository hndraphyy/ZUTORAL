const ActionDropdown = ({ onClose, data, pos, detailOn, editOn, deleteOn }) => {
  const handleClickOutside = (e) => {
    if (e.target.dataset.overlay) onClose();
  };

  return (
    <div
      data-overlay
      onClick={handleClickOutside}
      className="absolute inset-0 z-50"
    >
      <div
        className=" bg-white border border-gray-200 shadow-lg rounded-md w-40 overflow-hidden"
        style={{ top: pos.top, left: pos.left }}
      >
        {detailOn && (
          <button
            className="w-full py-2 px-4 text-sm text-left hover:bg-gray-100"
            onClick={() => alert(`Detail → ${data?.name}`)}
          >
            Detail
          </button>
        )}

        {editOn && (
          <button
            className="w-full py-2 px-4 text-sm text-left hover:bg-yellow-100"
            onClick={() => alert(`Edit → ${data?.name}`)}
          >
            Edit
          </button>
        )}

        {deleteOn && (
          <button
            className="w-full py-2 px-4 text-sm text-left hover:bg-red-100 text-red-600"
            onClick={() => alert(`Delete → ${data?.name}`)}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default ActionDropdown;
