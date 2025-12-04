import { useState } from "react";
import Button from "../../../../components/ui/Button";
import Input from "../../../../components/ui/Input";
import StatusLabel from "../../../../components/ui/StatusLabel";
import FilterStatus from "../../../../components/filters/Status";

import {
  formatStatusLabel,
  getStatusColor,
} from "../../../../utils/statusUtils";
import {
  ORDERS_STATUS_LABELS,
  ORDERS_STATUS_COLORS,
} from "../config/statusConfig";

const OrderFormModal = ({ order, mode = "view", onSave, onCancel }) => {
  const isEditable = mode === "edit" || mode === "add";
  const isAddMode = mode === "add";

  const getInitialData = () => {
    if (isAddMode) {
      return { customer: "", total: "", date: "", status: "active" };
    }
    return {
      name: order?.customer || "",
      username: order?.total || "",
      date: order?.date || "",
      status: order?.status || "active",
    };
  };

  const [formData, setFormData] = useState(getInitialData());

  const handleSave = () => {
    if (onSave) {
      onSave(formData);
    }
    onCancel();
  };

  const formatDateForDisplay = (dateString) => {
    if (!dateString) return "-";
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  return (
    <div className="w-[90vw] sm:w-[50vw] lg:w-[40vw] xl:w-[30vw] 2xl:w-[25vw] overflow-y-auto">
      <div className=" p-4 xl:p-5">
        <h2 className="text-xl 2xl:text-2xl text-center mb-7">
          {isAddMode
            ? "Add New Order"
            : isEditable
            ? "Edit Order"
            : "Order Detail"}
        </h2>

        <div className="flex flex-col gap-2 xl:gap-4 mb-2">
          {!isAddMode && (
            <div>
              <span className="text-base 2xl:text-xl text-purple">
                Order ID
              </span>
              <br />
              <span className="text-xl 2xl:text-2xl font-semibold text-gray-700">
                {order.id}
              </span>
            </div>
          )}

          {!isAddMode && (
            <div>
              <span className="text-base 2xl:text-xl text-purple">Invoice</span>
              <br />
              <span className="text-xl 2xl:text-2xl font-semibold text-gray-700">
                {order.invoice}
              </span>
            </div>
          )}

          {/* Customer */}
          <div>
            {isEditable ? (
              <Input
                label="Full Name"
                placeholder="Full Name"
                classNameLabel="text-base 2xl:text-xl text-purple"
                value={formData.customer}
                onChange={(e) =>
                  setFormData({ ...formData, customer: e.target.value })
                }
              />
            ) : (
              <div className="flex flex-col">
                <span className="text-base 2xl:text-xl text-purple">
                  Customer Name
                </span>
                <span className="text-xl 2xl:text-2xl font-semibold text-gray-700">
                  {order.customer}
                </span>
              </div>
            )}
          </div>

          <div>
            <span className="text-base 2xl:text-xl text-purple block mb-1">
              Date
            </span>
            {isAddMode ? (
              <div className="flex items-center h-11 px-3 border border-gray-300 rounded-md bg-gray-50 text-gray-700">
                {formatDateForDisplay(formData.date)}
              </div>
            ) : (
              <span className="text-xl 2xl:text-2xl font-semibold text-gray-700">
                {formatDateForDisplay(order.date)}
              </span>
            )}
          </div>

          {/* Status */}
          <div>
            <span className="text-base 2xl:text-xl text-purple block mb-3">
              Status
            </span>
            {isEditable ? (
              <FilterStatus
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
                className="h-11"
                options={[
                  { value: "paid", label: "Paid" },
                  { value: "pending", label: "Pending" },
                  { value: "cancelled", label: "Cancelled" },
                ]}
              />
            ) : (
              <StatusLabel
                variant={getStatusColor(order.status, ORDERS_STATUS_COLORS)}
                label={formatStatusLabel(order.status, ORDERS_STATUS_LABELS)}
              />
            )}
          </div>

          {/* Tombol */}
          <div className="mt-5">
            {isEditable ? (
              <div className="grid grid-cols-2 gap-4">
                <Button variant="secondary" onClick={onCancel} label="Cancel" />
                <Button
                  onClick={handleSave}
                  label={isAddMode ? "Add orders" : "Save Changes"}
                />
              </div>
            ) : (
              <div className="grid">
                <Button variant="primary" onClick={onCancel} label="Close" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderFormModal;
