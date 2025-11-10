import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchInput = ({ value, onChange, placeholder = "Search..." }) => {
  return (
    <div className="relative">
      <label htmlFor="search" className="absolute left-3 top-2.5">
        <FiSearch size={24} className="text-gray-400" />
      </label>
      <input
        type="search"
        id="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full pr-3 pl-11 py-2 outline-0 text-lg border rounded-md border-search text-gray-500 `}
      />
    </div>
  );
};

export default SearchInput;
