import React from "react";

const statusVariants = {
  purple: {
    className: "bg-purple-200 text-purple-700",
  },
  yellow: {
    className: "bg-yellow-200 text-yellow-700",
  },
  pink: {
    className: "bg-pink-200 text-pink-700",
  },
  blue: {
    className: "bg-blue-200 text-blue-700",
  },
  default: {
    className: "bg-gray-200 text-gray-700",
  },
};

const StatusLabel = ({ variant, label }) => {
  const key = variant?.toLowerCase() || "default";

  const style = statusVariants[key] || statusVariants.default;

  const baseClasses =
    "font-medium py-1 px-3 rounded-full text-xs lg:text-[14px] 2xl:text-[16px] whitespace-nowrap";

  return <span className={`${baseClasses} ${style.className}`}>{label}</span>;
};

export default StatusLabel;
