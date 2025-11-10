import { useNavigate } from "react-router-dom";

const LogoutButton = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/login", { replace: true });
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full flex justify-start items-center px-5 text-red bg-transparent text-[22px] mb-5 gap-2.5 cursor-pointer"
    >
      <img
        src="/assets/svg/sidebar-icon/logout.svg"
        alt="log out"
        className="h-7"
      />
      Log Out
    </button>
  );
};

export default LogoutButton;
