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
      className="w-full h-full flex justify-start items-center px-2 md:px-5 text-red-light text-[22px] mb-8 gap-2.5 cursor-pointer"
    >
      <img
        src="/assets/svg/sidebar-icon/logout-light.svg"
        alt="log out"
        className="h-8 md:h-7"
      />
      <p className="hidden md:block">Log Out</p>
    </button>
  );
};

export default LogoutButton;
