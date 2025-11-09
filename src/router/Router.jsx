import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import ManagerLayout from "../layouts/ManagerLayout";
import SalesAgentLayout from "../layouts/SalesAgentLayout";
import ManagerDashboardPage from "../pages/manager/dashboard/ManagerDashboardPage";
import ManagerProductsPage from "../pages/manager/products/ManagerProductsPage";
import ManagerEmployeesPage from "../pages/manager/employees/ManagerEmployeesPage";
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
    path: "/manager",
    element: <ManagerLayout />,
    children: [
      { path: "dashboard", element: <ManagerDashboardPage /> },
      { path: "products", element: <ManagerProductsPage /> },
      { path: "employees", element: <ManagerEmployeesPage /> },
    ],
  },
  {
    path: "/sales-agent",
    element: <SalesAgentLayout />,
    children: [{ path: "dashboard", element: <SalesAgentDashboardPage /> }],
  },
]);

export default router;
