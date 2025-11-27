import React from "react";

const Input = React.forwardRef(
  (
    {
      label,
      id,
      type = "text",
      value,
      onChange,
      classNameLabel = "",
      placeholder = "",
      className = "",
      disabled = false,
      required = false,
      ...props
    },
    ref
  ) => {
    return (
      <div className="mb-3">
        {label && (
          <label htmlFor={id} className={`block mb-1 ${classNameLabel}`}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={`w-full px-3  py-2 outline-0 text-base 2xl:text-lg border rounded-md border-search text-gray-500 ${
            disabled
              ? "bg-gray-100 text-gray-500 cursor-not-allowed"
              : "bg-white"
          } ${className}`}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
