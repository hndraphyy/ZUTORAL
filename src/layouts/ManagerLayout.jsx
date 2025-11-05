import { Outlet } from "react-router-dom";
import ManagerSidebar from "../components/sidebar/ManagerSidebar";

const ManagerLayout = () => {
  return (
    <div className="flex">
      <ManagerSidebar />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default ManagerLayout;
