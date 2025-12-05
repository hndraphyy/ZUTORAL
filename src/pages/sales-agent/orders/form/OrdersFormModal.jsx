import { useState } from "react";
import { formatRupiah } from "../../../../utils/format";
import {
  formatStatusLabel,
  getStatusColor,
} from "../../../../utils/statusUtils";
import {
  ORDERS_STATUS_LABELS,
  ORDERS_STATUS_COLORS,
} from "../config/statusConfig";

import Button from "../../../../components/ui/Button";
import Input from "../../../../components/ui/Input";
import StatusLabel from "../../../../components/ui/StatusLabel";
import FilterStatus from "../../../../components/filters/Status";

const OrderFormModal = ({ order, mode = "view", onSave, onCancel }) => {
  const isEditable = mode === "edit" || mode === "add";
  const isAddMode = mode === "add";

  const getTodayDate = () => new Date().toISOString().split("T")[0];

  const getInitialData = () => {
    if (isAddMode) {
      return {
        customer: "",
        total: "",
        date: getTodayDate(),
        status: "pending",
      };
    }
    return {
      customer: order?.customer || "",
      total: order?.total || "",
      date: order?.date || "",
      status: order?.status || "pending",
    };
  };

  const [formData, setFormData] = useState(getInitialData());

  const handleSave = () => {
    if (onSave) {
      onSave(formData);
    }
  };

  const formatDateForDisplay = (dateString) => {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="w-[90vw] sm:w-[50vw] lg:w-[40vw] xl:w-[30vw] 2xl:w-[25vw] overflow-y-auto">
      <div className="p-4 xl:p-5">
        <h2 className="text-xl 2xl:text-2xl text-center mb-7">
          {isAddMode
            ? "Add New Order"
            : isEditable
            ? "Edit Order"
            : "Order Detail"}
        </h2>

        <div className="flex flex-col gap-4">
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
                label="Customer Name"
                placeholder="Customer Name"
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

          {/* Total */}
          <div>
            {isEditable ? (
              <Input
                label="Total"
                placeholder="Order Total"
                classNameLabel="text-base 2xl:text-xl text-purple"
                type="number"
                value={formData.total}
                onChange={(e) =>
                  setFormData({ ...formData, total: e.target.value })
                }
              />
            ) : (
              <div className="flex flex-col">
                <span className="text-base 2xl:text-xl text-purple">Total</span>
                <span className="text-xl 2xl:text-2xl font-semibold text-gray-700">
                  {formatRupiah(order.total)}
                </span>
              </div>
            )}
          </div>

          {/* Date — EDITABLE di add/edit, text di view */}
          <div>
            <span className="text-base 2xl:text-xl text-purple block mb-1">
              Date
            </span>
            {isEditable ? (
              <Input
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className="h-11"
              />
            ) : (
              <span className="text-xl 2xl:text-2xl font-semibold text-gray-700">
                {formatDateForDisplay(order.date)}
              </span>
            )}
          </div>

          {/* Status */}
          <div>
            <span className="text-base 2xl:text-xl text-purple block mb-1">
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

          {/* Buttons */}
          <div className="mt-6">
            {isEditable ? (
              <div className="grid grid-cols-2 gap-4">
                <Button variant="secondary" onClick={onCancel} label="Cancel" />
                <Button
                  onClick={handleSave}
                  label={isAddMode ? "Add Order" : "Save Changes"}
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
