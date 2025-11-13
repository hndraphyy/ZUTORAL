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
      className="w-full h-full flex justify-start items-center px-2 md:px-5 text-red-light md:text-lg 2xl:text-[22px] text-xl mb-8 gap-2.5 cursor-pointer"
    >
      <img
        src="/assets/svg/sidebar-icon/logout-light.svg"
        alt="log out"
        className="h-9 md:h-7 2xl:h-10"
      />
      <p className="hidden md:block">Log Out</p>
    </button>
  );
};

export default LogoutButton;
