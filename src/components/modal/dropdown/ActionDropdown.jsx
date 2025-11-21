const ActionDropdown = ({ onClose, pos, detailOn, editOn, deleteOn }) => {
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
        className="absolute bg-white border border-gray-200 shadow-lg rounded-md overflow-hidden"
        style={{ top: pos.top, left: pos.left }}
      >
        {detailOn && (
          <button
            className="w-full py-2 px-4 text-sm text-left 2xl:text-lg hover:bg-purple-light"
            onClick={() => {
              onClose();
            }}
          >
            Detail
          </button>
        )}

        {editOn && (
          <button
            className="w-full py-2 px-4 text-sm text-left 2xl:text-lg hover:bg-purple-light"
            onClick={() => {
              onClose();
            }}
          >
            Edit
          </button>
        )}

        {deleteOn && (
          <button
            className="w-full py-2 px-4 text-sm text-left 2xl:text-lg hover:bg-purple-light"
            onClick={() => {
              onClose();
            }}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default ActionDropdown;
