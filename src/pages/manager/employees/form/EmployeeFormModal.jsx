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
  EMPLOYEE_STATUS_LABELS,
  EMPLOYEE_STATUS_COLORS,
} from "../config/statusConfig";

const EmployeeFormModal = ({ employee, mode = "view", onSave, onCancel }) => {
  const isEditable = mode === "edit" || mode === "add";
  const isAddMode = mode === "add";

  const getInitialData = () => {
    if (isAddMode) {
      return { name: "", username: "", email: "", status: "active" };
    }
    return {
      name: employee?.name || "",
      username: employee?.username || "",
      email: employee?.email || "",
      status: employee?.status || "active",
    };
  };

  const [formData, setFormData] = useState(getInitialData());

  const handleSave = () => {
    if (onSave) {
      onSave(formData);
    }
  };

  return (
    <div className="w-[90vw] sm:w-[50vw] lg:w-[40vw] xl:w-[30vw] 2xl:w-[25vw] overflow-y-auto">
      <div className=" p-4 xl:p-5">
        <h2 className="text-xl 2xl:text-2xl text-center mb-7">
          {isAddMode
            ? "Add New Employee"
            : isEditable
            ? "Edit Employee"
            : "Employee Detail"}
        </h2>

        <div className="flex flex-col gap-2 xl:gap-4 mb-2">
          {!isAddMode && (
            <div>
              <span className="text-base 2xl:text-xl text-purple">
                Employee ID
              </span>{" "}
              <br />
              <span className="text-xl 2xl:text-2xl font-semibold text-gray-700">
                {employee.id}
              </span>
            </div>
          )}

          {/* Name */}
          <div>
            {isEditable ? (
              <Input
                label="Full Name"
                classNameLabel="text-base 2xl:text-xl text-purple"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            ) : (
              <div className="flex flex-col">
                <span className="text-base 2xl:text-xl text-purple">
                  Full Name
                </span>
                <span className="text-xl 2xl:text-2xl font-semibold text-gray-700">
                  {employee.name}
                </span>
              </div>
            )}
          </div>

          {/* Username */}
          <div>
            {isEditable ? (
              <Input
                label="Username"
                classNameLabel="text-base 2xl:text-xl text-purple"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
            ) : (
              <div className="flex flex-col">
                <span className="text-base 2xl:text-xl text-purple">
                  Username
                </span>
                <span className="text-xl 2xl:text-2xl font-semibold text-gray-700">
                  {employee.username}
                </span>
              </div>
            )}
          </div>

          {/* Email */}
          <div>
            {isEditable ? (
              <Input
                label="Email"
                type="email"
                classNameLabel="text-base 2xl:text-xl text-purple"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            ) : (
              <div className="flex flex-col">
                <span className="text-base 2xl:text-xl text-purple">Email</span>
                <span className="text-xl 2xl:text-2xl font-semibold text-gray-700">
                  {employee.email}
                </span>
              </div>
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
                  { value: "active", label: "Active" },
                  { value: "inactive", label: "Inactive" },
                ]}
              />
            ) : (
              <StatusLabel
                variant={getStatusColor(
                  employee.status,
                  EMPLOYEE_STATUS_COLORS
                )}
                label={formatStatusLabel(
                  employee.status,
                  EMPLOYEE_STATUS_LABELS
                )}
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
                  label={isAddMode ? "Add Employee" : "Save Changes"}
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

export default EmployeeFormModal;
