import React from "react";

const WidgetCard = ({ title, value, icon, children }) => {
  return (
    <div className=" bg-white p-4 rounded-xl shadow-md border border-gray-200">
      <h3 className="text-base 2xl:text-lg font-medium text-gray-700 mb-2">
        {title}
      </h3>
      <div className="flex items-center gap-3">
        <span>{icon}</span>
        <p className="text-lg lg:text-2xl 2xl:text-4xl font-bold text-gray-600">
          {value}
        </p>
      </div>
      {children && <div className="mt-2">{children}</div>}
    </div>
  );
};

export default WidgetCard;
