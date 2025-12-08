import {
  FaFile,
  FaFileCircleCheck,
  FaFileCircleMinus,
  FaFileCircleXmark,
} from "react-icons/fa6";
import WidgetCard from "../../../../components/cards/WidgetCard";
import { getDashboardData } from "../data/dashboardData";

const Transactions = () => {
  const currentYear = new Date().getFullYear();
  const data = getDashboardData();
  return (
    <div>
      <p className="text-base lg:text-lg 2xl:text-2xl mb-2 font-medium text-gray-600">
        Transactions {currentYear}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <WidgetCard
          title="Total"
          icon={<FaFile className="w-8 h-8 text-purple" />}
          value={data.totalTransactions.total}
        />
        <WidgetCard
          title="Completed"
          icon={<FaFileCircleCheck className="w-8 h-8 text-purple" />}
          value={data.totalTransactions.completed}
        />
        <WidgetCard
          title="Pending"
          icon={<FaFileCircleMinus className="w-8 h-8 text-purple" />}
          value={data.totalTransactions.pending}
        />
        <WidgetCard
          title="Failed"
          icon={<FaFileCircleXmark className="w-8 h-8 text-purple" />}
          value={data.totalTransactions.failed}
        />
      </div>
      <p className="text-base lg:text-lg 2xl:text-2xl font-medium mb-2 text-gray-600">
        Transactions Today
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <WidgetCard
          title="Total"
          icon={<FaFile className="w-8 h-8 text-purple" />}
          value={data.transactionsToday.total}
        />
        <WidgetCard
          title="Completed"
          icon={<FaFileCircleCheck className="w-8 h-8 text-purple" />}
          value={data.transactionsToday.completed}
        />
        <WidgetCard
          title="Pending"
          icon={<FaFileCircleMinus className="w-8 h-8 text-purple" />}
          value={data.transactionsToday.pending}
        />
        <WidgetCard
          title="Failed"
          icon={<FaFileCircleXmark className="w-8 h-8 text-purple" />}
          value={data.transactionsToday.failed}
        />
      </div>
    </div>
  );
};
export default Transactions;
