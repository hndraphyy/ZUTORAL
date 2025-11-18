import React from "react";

const statusVariants = {
  purple: {
    className: "bg-purple-100 text-purple-600",
  },
  yellow: {
    className: "bg-yellow-100 text-yellow-600",
  },
  pink: {
    className: "bg-pink-100 text-pink-600",
  },
  blue: {
    className: "bg-blue-100 text-blue-700",
  },
  default: {
    className: "bg-gray-100 text-gray-700",
  },
};

const StatusLabel = ({ variant, label }) => {
  const key = variant?.toLowerCase() || "default";

  const style = statusVariants[key] || statusVariants.default;

  const baseClasses =
    "font-medium py-1 px-3 rounded-full text-xs lg:text-[14px] whitespace-nowrap";

  return <span className={`${baseClasses} ${style.className}`}>{label}</span>;
};

export default StatusLabel;
