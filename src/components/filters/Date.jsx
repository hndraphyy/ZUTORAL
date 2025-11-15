const FilterDate = ({ date, setDate, className = "" }) => {
  return (
    <div className={`h-full ${className}`}>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border text-lg border-gray-300 rounded-md h-full p-2 w-full text-gray-500"
      />
    </div>
  );
};
e;
export default FilterDate;
