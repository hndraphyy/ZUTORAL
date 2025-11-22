import { FiCalendar } from "react-icons/fi";

const FilterDate = ({ value, onChange, className = "" }) => {
  return (
    <div className={`relative h-full ${className}`}>
      <label htmlFor="date">
        <FiCalendar className="absolute right-3 top-3.5 text-gray-500" />
      </label>
      <input
        type="date"
        id="date"
        value={value}
        onChange={onChange}
        className="border appearance-none outline-0 text-base 2xl:text-lg border-gray-300 rounded-md h-full p-2 w-full text-gray-500 
          [&::-webkit-calendar-picker-indicator]:opacity-0"
      />
    </div>
  );
};
export default FilterDate;
