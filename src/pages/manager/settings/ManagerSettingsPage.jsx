import React from "react";
import usePageTitle from "../../../hooks/usePageTitle";
import Header from "../../../components/Header";
import ProfileSection from "./components/ProfileSection";
import PasswordSection from "./components/PasswordSection";

const mockUser = {
  email: "manager@gmail.com",
  username: "manager",
  displayName: "Manager User",
};

const ManagerSettingsPage = () => {
  usePageTitle("Settings - Manager");

  const handleSaveProfile = (data) => {
    console.log("Update profile:", data);
  };

  const handleChangePassword = (data) => {
    console.log("Change password:", data);
  };

  return (
    <div>
      <Header title="Settings" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <ProfileSection user={mockUser} onSave={handleSaveProfile} />
        <PasswordSection onChangePassword={handleChangePassword} />
      </div>
    </div>
  );
};

export default ManagerSettingsPage;
