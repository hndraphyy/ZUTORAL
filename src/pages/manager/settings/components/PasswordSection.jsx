import React, { useState } from "react";
import Input from "../../../../components/ui/Input";
import Button from "../../../../components/ui/Button";

const PasswordSection = ({ onChangePassword }) => {
  const [formData, setFormData] = useState({
    current: "",
    new: "",
    confirm: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.current.trim() === "") {
      setError("Current password is required.");
      return;
    }
    if (formData.new.length < 6) {
      setError("New password must be at least 6 characters.");
      return;
    }
    if (formData.new === formData.current) {
      setError("New password must be different from current password.");
      return;
    }
    if (formData.new !== formData.confirm) {
      setError("New password and confirmation do not match.");
      return;
    }

    onChangePassword(formData);
    setFormData({ current: "", new: "", confirm: "" });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Change Password
      </h2>
      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <Input
            label="Current Password"
            placeholder="Current Password"
            name="current"
            type="password"
            value={formData.current}
            onChange={handleChange}
          />
          <Input
            label="New Password"
            placeholder="New Password"
            name="new"
            type="password"
            value={formData.new}
            onChange={handleChange}
          />
          <Input
            label="Confirm New Password"
            placeholder="Confirm New Password"
            name="confirm"
            type="password"
            value={formData.confirm}
            onChange={handleChange}
          />
        </div>
        <div className="grid">
          <Button type="submit" label="Update Password" variant="primary" />
        </div>
      </form>
    </div>
  );
};

export default PasswordSection;
