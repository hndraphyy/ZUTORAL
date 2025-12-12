import {
  FaFile,
  FaFileCircleCheck,
  FaFileCircleMinus,
  FaFileCircleXmark,
} from "react-icons/fa6";
import WidgetCard from "./WidgetCard";

const StatCards = ({ title, yearlyData, todayData }) => {
  const currentYear = new Date().getFullYear();

  const yearlyCards = [
    {
      title: "Total",
      icon: <FaFile className="w-8 h-8 text-purple" />,
      value: yearlyData.total,
    },
    {
      title: "Completed",
      icon: <FaFileCircleCheck className="w-8 h-8 text-purple" />,
      value: yearlyData.completed,
    },
    {
      title: "Pending",
      icon: <FaFileCircleMinus className="w-8 h-8 text-purple" />,
      value: yearlyData.pending,
    },
    {
      title: "Failed",
      icon: <FaFileCircleXmark className="w-8 h-8 text-purple" />,
      value: yearlyData.failed,
    },
  ];

  const todayCards = [
    {
      title: "Total",
      icon: <FaFile className="w-8 h-8 text-purple" />,
      value: todayData.total,
    },
    {
      title: "Completed",
      icon: <FaFileCircleCheck className="w-8 h-8 text-purple" />,
      value: todayData.completed,
    },
    {
      title: "Pending",
      icon: <FaFileCircleMinus className="w-8 h-8 text-purple" />,
      value: todayData.pending,
    },
    {
      title: "Failed",
      icon: <FaFileCircleXmark className="w-8 h-8 text-purple" />,
      value: todayData.failed,
    },
  ];

  return (
    <div>
      <p className="text-lg 2xl:text-2xl mb-2 font-medium text-gray-600">
        {title} {currentYear}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {yearlyCards.map((card, index) => (
          <WidgetCard
            key={`yearly-${index}`}
            title={card.title}
            icon={card.icon}
            value={card.value}
          />
        ))}
      </div>

      <p className="text-lg 2xl:text-2xl font-medium mb-2 text-gray-600">
        {title} Today
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {todayCards.map((card, index) => (
          <WidgetCard
            key={`today-${index}`}
            title={card.title}
            icon={card.icon}
            value={card.value}
          />
        ))}
      </div>
    </div>
  );
};

export default StatCards;
