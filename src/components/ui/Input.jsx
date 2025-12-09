import React, { useState, forwardRef } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Input = forwardRef(
  (
    {
      label,
      type = "text",
      showPasswordToggle = false,
      value,
      onChange,
      placeholder = "",
      className = "",
      classNameLabel = "",
      disabled = false,
      required = false,
      name,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const actualType =
      showPasswordToggle && type === "password"
        ? showPassword
          ? "text"
          : "password"
        : type;

    const handleChange = (e) => {
      let inputValue = e.target.value;

      if (type === "number") {
        inputValue = inputValue.replace(/[^0-9]/g, "");
      }

      onChange({
        ...e,
        target: {
          ...e.target,
          value: inputValue,
        },
      });
    };

    return (
      <div className="mb-3">
        {label && (
          <label htmlFor={name} className={`text-gray-600 ${classNameLabel}`}>
            {label}
          </label>
        )}
        <div className="relative mt-1.5">
          <input
            ref={ref}
            id={name}
            name={name}
            type={actualType}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            className={`w-full px-3  py-2 outline-0 text-[14px] 2xl:text-lg border rounded-md border-search text-gray-500 ${
              disabled
                ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                : "bg-white"
            } ${className}`}
            {...props}
          />
          {showPasswordToggle && type === "password" && (
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-800"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FiEye /> : <FiEyeOff />}
            </button>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
