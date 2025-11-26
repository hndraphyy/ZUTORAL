const variantClasses = {
  primary: "bg-purple text-white hover:bg-purple/90",
  secondary: "bg-white border border-purple",
  danger: "bg-purple text-white hover:purple/90",
  outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
  ghost: "text-gray-700 hover:bg-gray-100",
};

const Button = ({
  onClick,
  icon,
  label,
  className = "",
  variant = "primary",
  classNameLabel = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-md flex items-center justify-center gap-2 cursor-pointer text-base 2xl:text-lg transition-all duration-200
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {icon && <span>{icon}</span>}
      {label && <span className={classNameLabel}>{label}</span>}
    </button>
  );
};

export default Button;
