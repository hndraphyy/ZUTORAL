import { IoIosArrowDown } from "react-icons/io";

const FilterStatus = ({ status, setStatus, className = "" }) => {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border px-3 outline-0 border-gray-300 text-base md:text-lg rounded-md h-full w-full text-gray-500 appearance-none bg-white"
      >
        <option value="">Status</option>
        <option value="active">Active</option>
        <option value="in-active">In-Active</option>
      </select>
      <IoIosArrowDown className="absolute top-[13px] right-3 pointer-events-none text-gray-500 w-5 h-5" />
    </div>
  );
};

export default FilterStatus;
