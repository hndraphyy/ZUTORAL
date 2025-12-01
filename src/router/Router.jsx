import { createBrowserRouter, Navigate } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";

import LoginPage from "../pages/auth/LoginPage";
import ManagerLayout from "../layouts/ManagerLayout";
import SalesAgentLayout from "../layouts/SalesAgentLayout";

import ManagerDashboardPage from "../pages/manager/dashboard/ManagerDashboardPage";
import ManagerProductsPage from "../pages/manager/products/ManagerProductsPage";
import ManagerTransactionsPage from "../pages/manager/transactions/ManagerTransactionsPage";
import ManagerEmployeesPage from "../pages/manager/employees/ManagerEmployeesPage";
import ManagerReportsPage from "../pages/manager/reports/ManagerReportsPage";

import SalesAgentDashboardPage from "../pages/sales-agent/dashboard/SalesAgentDashboardPage";
import SalesAgentCustomersPage from "../pages/sales-agent/customers/SalesAgentCustomersPage";
import SalesAgentOrdersPage from "../pages/sales-agent/orders/SalesAgentOrdersPage";
import SalesAgentReportsPage from "../pages/sales-agent/reports/SalesAgentReportsPage";

import SettingsPage from "../pages/settings/SettingsPage";

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
    element: <ProtectedRoute allowedRoles={["manager"]} />,
    children: [
      {
        path: "/manager",
        element: <ManagerLayout />,
        children: [
          { index: true, element: <ManagerDashboardPage /> },
          { path: "dashboard", element: <ManagerDashboardPage /> },
          { path: "products", element: <ManagerProductsPage /> },
          { path: "transactions", element: <ManagerTransactionsPage /> },
          { path: "employees", element: <ManagerEmployeesPage /> },
          { path: "reports", element: <ManagerReportsPage /> },
          { path: "settings", element: <SettingsPage /> },
        ],
      },
    ],
  },

  {
    element: <ProtectedRoute allowedRoles={["sales"]} />,
    children: [
      {
        path: "/sales-agent",
        element: <SalesAgentLayout />,
        children: [
          { index: true, element: <SalesAgentDashboardPage /> },
          { path: "dashboard", element: <SalesAgentDashboardPage /> },
          { path: "customers", element: <SalesAgentCustomersPage /> },
          { path: "orders", element: <SalesAgentOrdersPage /> },
          { path: "reports", element: <SalesAgentReportsPage /> },
          { path: "settings", element: <SettingsPage /> },
        ],
      },
    ],
  },
]);

export default router;
