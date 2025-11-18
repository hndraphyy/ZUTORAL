import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchInput = ({
  value,
  onChange,
  className = "",
  placeholder = "Search...",
}) => {
  return (
    <div className={`relative ${className}`}>
      <label htmlFor="search" className="absolute left-2.5 2xl:left-3 top-2.5">
        <FiSearch className="text-gray-400 h-5.5 w-5.5 2xl:h-6 2xl:w-6" />
      </label>
      <input
        type="search"
        id="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full pr-3 pl-9.5 2xl:pl-11 py-2 outline-0 text-base 2xl:text-lg border rounded-md border-search text-gray-500"
      />
    </div>
  );
};

export default SearchInput;
