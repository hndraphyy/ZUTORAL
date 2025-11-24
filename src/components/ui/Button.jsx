import { useNavigate } from "react-router-dom";

const Button = ({
  onAdd,
  icon,
  label,
  className = "",
  classNameButton = "",
  classNameLabel = "",
}) => {
  return (
    <div className={`grid gap-4 items-center ${className}`}>
      <button
        onClick={onAdd}
        className={`h-full px-4 bg-purple text-white rounded-md flex items-center justify-center gap-3 text-base 2xl:text-lg cursor-pointer hover:bg-purple/90 transition ${classNameButton}`}
      >
        {icon}
        <p className={classNameLabel}>{label}</p>
      </button>
    </div>
  );
};

export default Button;
