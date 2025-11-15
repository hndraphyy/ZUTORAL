import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import managerLinks from "../components/sidebar/managerLinks";

const ManagerLayout = () => {
  return (
    <div className="flex">
      <Sidebar Links={managerLinks} />
      <main className="md:ml-[260px] lg:ml-[270px] xl:ml-[318px] 2xl:ml-[360px] w-full p-2 md:p-5 lg:p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default ManagerLayout;
