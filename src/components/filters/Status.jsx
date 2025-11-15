import { IoIosArrowDown } from "react-icons/io";

const FilterStatus = ({
  status,
  setStatus,
  options = [],
  placeholder = "Status",
  className = "",
}) => {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border px-3 outline-0 border-gray-300 text-base md:text-lg rounded-md h-full w-full text-gray-500 appearance-none bg-white"
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <IoIosArrowDown className="absolute top-[15px] md:top-[13px] right-3 pointer-events-none text-gray-500 md:w-5 md:h-5" />
    </div>
  );
};

export default FilterStatus;
