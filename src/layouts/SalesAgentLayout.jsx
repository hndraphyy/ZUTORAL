import { Outlet } from "react-router-dom";
import SalesSidebar from "../components/sidebar/SalesAgentSidebar";

const SalesAgentLayout = () => {
  return (
    <div className="flex min-h-screen">
      <SalesSidebar />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default SalesAgentLayout;
