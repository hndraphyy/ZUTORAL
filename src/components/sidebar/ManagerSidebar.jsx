import { NavLink } from "react-router-dom";
import LogoutButton from "../LogoutButton";
import useAuth from "../../hooks/useAuth";

const ManagerSidebar = () => {
  const links = [
    {
      to: "/manager/dashboard",
      label: "Dashboard",
      icon: "/assets/svg/sidebar-icon/dashboard.svg",
      iconActive: "/assets/svg/sidebar-icon/active/dashboard.svg",
    },
    {
      to: "/manager/products",
      label: "Products",
      icon: "/assets/svg/sidebar-icon/products.svg",
      iconActive: "/assets/svg/sidebar-icon/active/products.svg",
    },
    {
      to: "/manager/transactions",
      label: "Transactions",
      icon: "/assets/svg/sidebar-icon/transactions.svg",
      iconActive: "/assets/svg/sidebar-icon/active/transactions.svg",
    },
    {
      to: "/manager/employees",
      label: "Employees",
      icon: "/assets/svg/sidebar-icon/employees.svg",
      iconActive: "/assets/svg/sidebar-icon/active/employees.svg",
    },
    {
      to: "/manager/reports",
      label: "Reports",
      icon: "/assets/svg/sidebar-icon/reports.svg",
      iconActive: "/assets/svg/sidebar-icon/active/reports.svg",
    },
    {
      to: "/manager/settings",
      label: "Settings",
      icon: "/assets/svg/sidebar-icon/settings.svg",
      iconActive: "/assets/svg/sidebar-icon/active/settings.svg",
    },
  ];

  const { logout } = useAuth();

  return (
    <aside className="fixed bottom-0 md:top-0 md:left-0 w-full md:w-[318px] h-[70px] md:h-full bg-sidebar flex md:flex-col justify-between items-center md:px-5 py-3 md:py-10 z-50 bg-cover">
      <div className="flex flex-col items-center gap-15 w-full">
        <img
          src="/assets/svg/logo-brand.svg"
          alt="Logo Brand"
          className="hidden md:block w-20 h-auto"
        />

        <div className="w-full overflow-x-auto md:overflow-y-auto scrollbar-hide px-2 md:px-0 flex justify-between md:flex-col md:gap-3 gap-5 md:h-[calc(100vh-200px)]">
          <nav className="flex justify-between md:flex-col md:gap-3 gap-5 w-full whitespace-nowrap md:whitespace-normal">
            {links.map(({ to, label, icon, iconActive }) => (
              <NavLink
                key={to}
                to={to}
                className="inline-block shrink-0 my-4 md:my-0"
              >
                {({ isActive }) => (
                  <div
                    className={`flex items-center gap-2.5 px-3 md:px-5 py-3 md:py-3 text-base md:text-xl rounded-full md:rounded-lg font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-white text-purple scale-95 md:scale-100"
                        : "text-white bg-transparent hover:bg-white/25 hover:scale-95 md:hover:scale-100"
                    }`}
                  >
                    <img
                      src={isActive ? iconActive : icon}
                      alt={`${label} icon`}
                      className="w-7 h-7 md:w-6 md:h-6 inline-block"
                    />
                    <p className="hidden md:block">{label}</p>
                  </div>
                )}
              </NavLink>
            ))}

            <div className="block md:hidden shrink-0">
              <LogoutButton onLogout={logout} />
            </div>
          </nav>
        </div>
      </div>

      <div className="hidden md:block absolute bottom-8 left-5 w-full">
        <LogoutButton onLogout={logout} />
      </div>
    </aside>
  );
};

export default ManagerSidebar;
