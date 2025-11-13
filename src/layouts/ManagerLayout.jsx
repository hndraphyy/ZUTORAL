import { Outlet } from "react-router-dom";
import ManagerSidebar from "../components/sidebar/ManagerSidebar";

const ManagerLayout = () => {
  return (
    <div className="flex">
      <ManagerSidebar />
      <main className="md:ml-[260px] lg:ml-[270px] xl:ml-[318px] 2xl:ml-[360px] w-full p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default ManagerLayout;
