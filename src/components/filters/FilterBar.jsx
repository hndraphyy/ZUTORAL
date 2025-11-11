import SearchInput from "../input/Search";
import { FaPlus } from "react-icons/fa";

const FilterBar = ({ search, setSearch, onAdd }) => {
  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="col-span-4">
        <SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <button
        onClick={onAdd}
        className="col-span-1 px-4 bg-purple text-white rounded-md flex items-center justify-center gap-3 text-xl cursor-pointer hover:bg-purple/90 transition"
      >
        <FaPlus />
        Add Product
      </button>
    </div>
  );
};

export default FilterBar;
