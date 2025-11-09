import { NavLink } from "react-router-dom";

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
      to: "/manager/employees",
      label: "Employees",
      icon: "/assets/svg/sidebar-icon/employees.svg",
      iconActive: "/assets/svg/sidebar-icon/active/employees.svg",
    },
  ];

  return (
    <aside className="fixed h-full w-[318px] bg-sidebar py-10 px-5 flex flex-col items-center gap-8 bg-cover">
      <img
        src="/assets/svg/logo-brand.svg"
        alt="Logo Brand"
        className="w-22 h-auto"
      />

      <nav className="flex flex-col gap-3 w-full">
        {links.map(({ to, label, icon, iconActive }) => (
          <NavLink key={to} to={to}>
            {({ isActive }) => (
              <div
                className={`flex items-center gap-2.5 px-5 py-3 text-xl rounded-lg font-medium transition-colors ${
                  isActive
                    ? "bg-white text-purple"
                    : "text-white bg-transparent hover:bg-white/25"
                }`}
              >
                <img
                  src={isActive ? iconActive : icon}
                  alt={`${label} icon`}
                  className="w-6 h-6 inline-block"
                />
                {label}
              </div>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default ManagerSidebar;
