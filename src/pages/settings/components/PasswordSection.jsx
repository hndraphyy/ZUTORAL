import React, { useState } from "react";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";

const PasswordSection = ({ onChangePassword }) => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.currentPassword.trim() === "") {
      setError("Current password is required.");
      return;
    }
    if (formData.newPassword.length < 6) {
      setError("New password must be at least 6 characters.");
      return;
    }
    if (formData.newPassword === formData.currentPassword) {
      setError("New password must be different from current password.");
      return;
    }
    if (formData.newPassword !== formData.confirmPassword) {
      setError("New password and confirmation do not match.");
      return;
    }

    onChangePassword(formData);
    setFormData({ currentPassword: "", newPassword: "", confirmPassword: "" });
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
            name="currentPassword"
            type="password"
            showPasswordToggle={true}
            value={formData.currentPassword}
            onChange={handleChange}
          />
          <Input
            label="New Password"
            placeholder="New Password"
            name="newPassword"
            type="password"
            showPasswordToggle={true}
            value={formData.newPassword}
            onChange={handleChange}
          />
          <Input
            label="Confirm New Password"
            placeholder="Confirm New Password"
            name="confirmPassword"
            type="password"
            showPasswordToggle={true}
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="mt-6 grid">
          <Button type="submit" label="Update Password" variant="primary" />
        </div>
      </form>
    </div>
  );
};

export default PasswordSection;
