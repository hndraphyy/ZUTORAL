import { NavLink } from "react-router-dom";

const ManagerSidebar = () => {
  const links = [
    { to: "/manager/dashboard", label: "Dashboard" },
    { to: "/manager/reports", label: "Reports" },
  ];

  return (
    <aside className="w-60 bg-white border-r p-4 shadow-md">
      <h2 className="text-xl font-bold mb-6">Zotural</h2>
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
