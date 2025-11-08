import { NavLink } from "react-router-dom";

const ManagerSidebar = () => {
  const links = [
    { to: "/manager/dashboard", label: "Dashboard" },
    { to: "/manager/reports", label: "Reports" },
  ];

  return (
    <aside className="w-[318px] bg-sidebar p-4 flex flex-col items-center gap-8 bg-cover">
      <img
        src="/assets/svg/logo-brand.svg"
        alt="Logo Brand"
        className="w-22 h-auto"
      />
      <nav className="flex flex-col gap-3">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-lg ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default ManagerSidebar;
