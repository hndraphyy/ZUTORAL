import { Outlet } from "react-router-dom";

const SalesAgentLayout = () => {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default SalesAgentLayout;
