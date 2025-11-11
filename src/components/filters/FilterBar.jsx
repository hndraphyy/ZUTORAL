import SearchInput from "./Search";
import { FaPlus } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const FilterBar = ({
  search,
  setSearch,
  showAdd = false,
  onAdd,
  label = "Add",
  showDate = false,
  date,
  setDate,
  showStatus = false,
  status,
  setStatus,
  className = "",
  classNameSearch = "",
  classNameDate = "",
  classNameStatus = "",
  classNameAdd = "",
}) => {
  return (
    <div className={`grid gap-4 items-center ${className}`}>
      {/* Search */}
      <div className={`${classNameSearch}`}>
        <SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Date */}
      {showDate && (
        <div className={`${classNameDate}`}>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full text-gray-500"
          />
        </div>
      )}

      {/* Status */}
      {showStatus && (
        <div className="relative w-full h-full">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border px-3 outline-0 border-gray-300 text-lg rounded-md h-full w-full text-gray-500 appearance-none bg-white"
          >
            <option value="">Status</option>
            <option value="active">Active</option>
            <option value="in-active">In-Active</option>
          </select>
          <IoIosArrowDown className="absolute top-[13px] right-3 pointer-events-none text-gray-500 w-5 h-5" />
        </div>
      )}

      {/* Add Button */}
      {showAdd && (
        <button
          onClick={onAdd}
          className={`h-full px-4 bg-purple text-white rounded-md flex items-center justify-center gap-3 text-lg cursor-pointer hover:bg-purple/90 transition ${classNameAdd}`}
        >
          <FaPlus />
          {label}
        </button>
      )}
    </div>
  );
};

export default FilterBar;
