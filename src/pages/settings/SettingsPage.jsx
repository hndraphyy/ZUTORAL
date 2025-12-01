import React from "react";
import useAuth from "../../hooks/useAuth";
import usePageTitle from "../../hooks/usePageTitle";
import Header from "../../components/Header";
import ProfileSection from "./components/ProfileSection";
import PasswordSection from "./components/PasswordSection";

const ManagerSettingsPage = () => {
  usePageTitle("Settings - ");

  const { getCurrentUser } = useAuth();
  const user = getCurrentUser();

  if (!user) {
    return <div className="p-6">Loading...</div>;
  }

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
        <ProfileSection user={user} onSave={handleSaveProfile} />
        <PasswordSection onChangePassword={handleChangePassword} />
      </div>
    </div>
  );
};

export default ManagerSettingsPage;
