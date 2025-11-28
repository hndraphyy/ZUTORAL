import { formatRupiah } from "../../../../utils/format";
import { formatDate } from "../../../../utils/date";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import { MdPending } from "react-icons/md";
import Button from "../../../../components/ui/Button";

const renderStatusBadge = (status) => {
  const config = {
    completed: {
      icon: <FaCircleCheck className="animate-popIn" />,
      label: "Completed",
      color: "text-green-500",
    },
    pending: {
      icon: <MdPending className="animate-pulse" />,
      label: "Pending",
      color: "text-yellow-500",
    },
    failed: {
      icon: <FaCircleXmark className="animate-shake" />,
      label: "Failed",
      color: "text-red-500",
    },
  };

  const { icon, label, color } = config[status] || {};
  if (!icon) return null;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`text-[100px] ${color}`}>{icon}</div>
      <span className={`font-medium ${color} text-lg 2xl:text-xl`}>
        {label}
      </span>
    </div>
  );
};

const TransactionDetail = ({ transaction, onCancel }) => {
  return (
    <div className="p-5 w-[85vw] sm:w-[50vw] lg:w-[40vw] xl:w-[30vw] 2xl:w-[25vw]">
      <h2 className="text-xl text-center mb-6">Transaction Detail</h2>

      <div className="flex justify-center mb-6">
        {renderStatusBadge(transaction.status)}
      </div>

      <hr className="border-t-2 border-gray-400 border-dashed" />

      <div className="space-y-4 text-gray-600 py-4">
        {[
          { label: "Invoice", value: transaction.invoice },
          { label: "Customer", value: transaction.customer },
          { label: "Sales", value: transaction.sales },
          { label: "Total", value: formatRupiah(transaction.total) },
          { label: "Date", value: formatDate(transaction.date) },
        ].map((item, i) => (
          <div key={i} className="flex justify-between items-center">
            <span className="text-sm md:text-lg 2xl:text-lg">{item.label}</span>
            <span className="text-sm md:text-lg 2xl:text-lg font-medium">
              {item.value}
            </span>
          </div>
        ))}
      </div>

      <hr className="border-t-2 border-gray-400 border-dashed" />

      <div className="mt-8 grid">
        <Button variant="primary" onClick={onCancel} label="Close" />
      </div>
    </div>
  );
};

export default TransactionDetail;
