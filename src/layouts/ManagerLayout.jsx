import { Outlet } from "react-router-dom";
import ManagerSidebar from "../components/sidebar/ManagerSidebar";

const ManagerLayout = () => {
  return (
    <div className="flex">
      <ManagerSidebar />
      <main className="ml-[318px] w-full p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default ManagerLayout;
