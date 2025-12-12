const variantClasses = {
  primary: "bg-purple text-white hover:bg-purple/90",
  secondary: "bg-white border border-purple",
  danger: "bg-purple text-white hover:purple/90",
  outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
  ghost: "text-gray-700 hover:bg-gray-100",
  logout:
    "w-full h-full flex justify-start items-center px-2 md:px-5 text-red-light md:text-lg 2xl:text-[22px] text-xl mb-8 gap-2.5 cursor-pointer",
};

const Button = ({
  onClick,
  icon,
  label,
  className = "",
  type,
  variant = "primary",
  classNameLabel = "",
}) => {
  return (
    <button
      type={type}
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
