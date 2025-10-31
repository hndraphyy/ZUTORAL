import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import ManagerDashboardPage from "../pages/manager/dashboard/ManagerDashboardPage";
import SalesAgentDashboardPage from "../pages/sales-agent/dashboard/SalesAgentDashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/manager/dashboard",
    element: <ManagerDashboardPage />,
  },
  {
    path: "/sales-agent/dashboard",
    element: <SalesAgentDashboardPage />,
  },
]);

export default router;
