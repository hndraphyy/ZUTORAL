import { IoIosArrowDown } from "react-icons/io";

const FilterStatus = ({ onChange, value, options, className = "" }) => {
  return (
    <div className={`relative w-full  ${className}`}>
      <select
        value={value}
        onChange={onChange}
        className="border px-3 outline-0 border-gray-300 text-base 2xl:text-lg rounded-md h-full w-full text-gray-500 appearance-none bg-white"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <IoIosArrowDown className="absolute top-[15px] 2xl:top-[13px] right-3 pointer-events-none text-gray-500 2xl:w-5 2xl:h-5" />
    </div>
  );
};

export default FilterStatus;
