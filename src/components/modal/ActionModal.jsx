const ActionModal = ({ onClose, data, actions }) => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="relative bg-white rounded-xl p-6 max-w-xs w-full text-center">
        <div>
          {actions.map((action, i) => (
            <button key={i} onClick={() => action.onClick(data)}>
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActionModal;
