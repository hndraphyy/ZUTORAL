import React, { useState } from "react";
import usePageTitle from "../../../hooks/usePageTitle";
import SearchInput from "../../../components/input/search";
import BaseTable from "../../../components/table/BaseTable";
import { FaPlus } from "react-icons/fa";

const ManagerProductsPage = () => {
  usePageTitle("Products - Manager");

  const [search, setSearch] = useState("");

  const columns = [
    { header: "No", accessor: "id" },
    { header: "Nama", accessor: "name" },
    { header: "Price", accessor: "price" },
    { header: "Stock", accessor: "stock" },
    {
      header: "Action",
      render: () => (
        <div className="flex  gap-2">
          <button className="text-gray-700 text-lg">Edit</button>
          <button className="text-gray-700 text-lg">Delete</button>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      name: "Kopi Hitam",
      price: "Rp 15.000",
      stock: 23,
    },
    {
      id: 2,
      name: "Roti Coklat",
      price: "Rp 12.000",
      stock: 8,
    },
  ];

  const filteredData = data.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="mb-10">
        <h2 className="text-3xl">Products</h2>
      </div>
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-4">
          <SearchInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className="col-span-1 px-4 bg-purple text-white rounded-md flex items-center justify-center gap-3 text-xl cursor-pointer">
          <FaPlus />
          Add
        </button>
      </div>
    </div>
  );
};

export default ManagerProductsPage;
