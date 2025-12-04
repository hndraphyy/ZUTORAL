import { useState, useRef, useEffect } from "react";
import Button from "../../../../components/ui/Button";
import Input from "../../../../components/ui/Input";

const CustomerFormModal = ({ customer, mode = "view", onSave, onCancel }) => {
  const isEditable = mode === "edit" || mode === "add";
  const isAddMode = mode === "add";

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const getInitialData = () => {
    if (isAddMode) {
      return {
        name: "",
        phone: "",
        email: "",
        joinDate: getTodayDate(),
      };
    }
    return {
      name: customer?.name || "",
      phone: customer?.phone || "",
      email: customer?.email || "",
      joinDate: customer?.joinDate || "",
    };
  };

  const [formData, setFormData] = useState(getInitialData());

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (onSave) {
      onSave(formData);
    }
  };

  const formatDateForDisplay = (dateString) => {
    if (!dateString) return "-";
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  return (
    <div className="grid grid-cols-12 max-h-[85dvh] w-[90vw] md:w-[500px] lg:w-[600px] overflow-y-auto">
      <div className="col-span-12 p-4 xl:p-5">
        <h2 className="text-xl 2xl:text-2xl text-center mb-7">
          {isAddMode
            ? "Add New Customer"
            : isEditable
            ? "Edit Customer"
            : "Customer Detail"}
        </h2>

        <div className="flex flex-col gap-4">
          {/* ID */}
          {!isAddMode && (
            <div>
              <span className="text-base 2xl:text-xl text-purple">
                Customer ID
              </span>
              <br />
              <span className="text-xl 2xl:text-2xl font-semibold text-gray-700">
                {customer.id}
              </span>
            </div>
          )}

          {/* Name */}
          <div>
            {isEditable ? (
              <Input
                label="Name"
                placeholder="Customer Name"
                classNameLabel="text-base 2xl:text-xl text-purple"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            ) : (
              <div className="flex flex-col">
                <span className="text-base 2xl:text-xl text-purple">Name</span>
                <span className="text-xl 2xl:text-2xl font-semibold text-gray-700">
                  {customer.name}
                </span>
              </div>
            )}
          </div>

          {/* Phone */}
          <div>
            {isEditable ? (
              <Input
                label="Phone"
                placeholder="Customer Phone"
                classNameLabel="text-base 2xl:text-xl text-purple"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            ) : (
              <div className="flex flex-col">
                <span className="text-base 2xl:text-xl text-purple">Phone</span>
                <span className="text-xl 2xl:text-2xl font-semibold text-gray-700">
                  {customer.phone}
                </span>
              </div>
            )}
          </div>

          {/* Email */}
          <div>
            {isEditable ? (
              <Input
                label="Email"
                placeholder="Customer Email"
                classNameLabel="text-base 2xl:text-xl text-purple"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            ) : (
              <div className="flex flex-col">
                <span className="text-base 2xl:text-xl text-purple">Email</span>
                <span className="text-xl 2xl:text-2xl font-semibold text-gray-700">
                  {customer.email}
                </span>
              </div>
            )}
          </div>

          {/* Join Date */}
          <div>
            <span className="text-base 2xl:text-xl text-purple block mb-1">
              Join Date
            </span>
            {isAddMode ? (
              <div className="flex items-center h-11 px-3 border border-gray-300 rounded-md bg-gray-50 text-gray-700">
                {formatDateForDisplay(formData.joinDate)}
              </div>
            ) : (
              <span className="text-xl 2xl:text-2xl font-semibold text-gray-700">
                {formatDateForDisplay(customer.joinDate)}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-6">
            {isEditable ? (
              <div className="grid grid-cols-2 gap-4">
                <Button variant="secondary" onClick={onCancel} label="Cancel" />
                <Button
                  onClick={handleSave}
                  label={isAddMode ? "Add Customer" : "Save Changes"}
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

export default CustomerFormModal;
