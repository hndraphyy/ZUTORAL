import React, { useState } from "react";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";

const ProfileSection = ({ user, onSave }) => {
  const [form, setForm] = useState({
    displayName: user.displayName || user.email.split("@")[0],
    username: user.username || user.email.split("@")[0],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <Input
            label="Display Name"
            placeholder="Display Name"
            name="displayName"
            value={form.displayName}
            onChange={handleChange}
          />

          <Input
            label="Username"
            placeholder="Username"
            name="username"
            value={form.username}
            onChange={handleChange}
          />

          <div>
            <label>Email</label>
            <p className="mt-1 px-3 border-l-2 border-gray-400 text-gray-600 text-[14px] 2xl:text-lg">
              {user.email}
            </p>
          </div>
        </div>
        <div className="mt-6 grid">
          <Button type="submit" label="Save Changes" variant="primary" />
        </div>
      </form>
    </div>
  );
};

export default ProfileSection;
