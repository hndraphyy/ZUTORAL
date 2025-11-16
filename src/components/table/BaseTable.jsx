import React from "react";

const BaseTable = ({ columns = [], data = [] }) => {
  return (
    <div className="w-full overflow-x-auto border border-gray-200 rounded-lg">
      <table className="min-w-full text-left">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((col, i) => (
              <th
                key={i}
                className="p-4 font-semibold text-gray-700 text-sm lg:text-[16px]"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-6 text-gray-500"
              >
                No Data Available
              </td>
            </tr>
          ) : (
            data.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50 transition-colors">
                {columns.map((col, ci) => (
                  <td
                    key={ci}
                    className="p-4 text-gray-700 text-sm lg:text-[16px]"
                  >
                    {col.render ? col.render(row) : row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BaseTable;
