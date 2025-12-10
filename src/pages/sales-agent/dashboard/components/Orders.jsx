import {
  FaFile,
  FaFileCircleCheck,
  FaFileCircleMinus,
  FaFileCircleXmark,
} from "react-icons/fa6";
import WidgetCard from "../../../../components/cards/WidgetCard";
import { getDashboardData } from "../data/dashboardData";

const OrdersDashboard = () => {
  const currentYear = new Date().getFullYear();
  const data = getDashboardData();
  return (
    <div>
      <p className="text-base lg:text-lg 2xl:text-2xl mb-2 font-medium text-gray-600">
        Orders {currentYear}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <WidgetCard
          title="Total"
          icon={<FaFile className="w-8 h-8 text-purple" />}
          value={data.totalOrders.total}
        />
        <WidgetCard
          title="Paid"
          icon={<FaFileCircleCheck className="w-8 h-8 text-purple" />}
          value={data.totalOrders.completed}
        />
        <WidgetCard
          title="Pending"
          icon={<FaFileCircleMinus className="w-8 h-8 text-purple" />}
          value={data.totalOrders.pending}
        />
        <WidgetCard
          title="Cancelled"
          icon={<FaFileCircleXmark className="w-8 h-8 text-purple" />}
          value={data.totalOrders.failed}
        />
      </div>
      <p className="text-base lg:text-lg 2xl:text-2xl font-medium mb-2 text-gray-600">
        Orders Today
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <WidgetCard
          title="Total"
          icon={<FaFile className="w-8 h-8 text-purple" />}
          value={data.ordersToday.total}
        />
        <WidgetCard
          title="Paid"
          icon={<FaFileCircleCheck className="w-8 h-8 text-purple" />}
          value={data.ordersToday.completed}
        />
        <WidgetCard
          title="Pending"
          icon={<FaFileCircleMinus className="w-8 h-8 text-purple" />}
          value={data.ordersToday.pending}
        />
        <WidgetCard
          title="Cancelled"
          icon={<FaFileCircleXmark className="w-8 h-8 text-purple" />}
          value={data.ordersToday.failed}
        />
      </div>
    </div>
  );
};
export default OrdersDashboard;
