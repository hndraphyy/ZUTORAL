import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import { salesLinks } from "../components/sidebar/data/Links";

const SalesAgentLayout = () => {
  return (
    <div className="flex">
      <Sidebar Links={salesLinks} />
      <main className="d:ml-60 lg:ml-[270px] xl:ml-[300px] 2xl:ml-[360px] w-full p-2 md:p-5 lg:p-8 pb-17 md:pb-0">
        <Outlet />
      </main>
    </div>
  );
};

export default SalesAgentLayout;
