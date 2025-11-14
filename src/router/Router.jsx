import { createBrowserRouter, Navigate } from "react-router-dom";

import LoginPage from "../pages/auth/LoginPage";
import ManagerLayout from "../layouts/ManagerLayout";
import SalesAgentLayout from "../layouts/SalesAgentLayout";

import ManagerDashboardPage from "../pages/manager/dashboard/ManagerDashboardPage";
import ManagerProductsPage from "../pages/manager/products/ManagerProductsPage";
import ManagerTransactionsPage from "../pages/manager/transactions/ManagerTransactionsPage";
import ManagerEmployeesPage from "../pages/manager/employees/ManagerEmployeesPage";
import ManagerReportsPage from "../pages/manager/reports/ManagerReportsPage";
import ManagerSettingsPage from "../pages/manager/settings/ManagerSettingsPage";

import SalesAgentDashboardPage from "../pages/sales-agent/dashboard/SalesAgentDashboardPage";
import SalesAgentCustomersPage from "../pages/sales-agent/customers/SalesAgentCustomersPage";
import SalesAgentOrdersPage from "../pages/sales-agent/orders/SalesAgentOrdersPage";
import SalesAgentReportsPage from "../pages/sales-agent/reports/SalesAgentReportsPage";
import SalesAgentSettingsPage from "../pages/sales-agent/settings/SalesAgentSettings";

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
      { path: "transactions", element: <ManagerTransactionsPage /> },
      { path: "employees", element: <ManagerEmployeesPage /> },
      { path: "reports", element: <ManagerReportsPage /> },
      { path: "settings", element: <ManagerSettingsPage /> },
    ],
  },
  {
    path: "/sales-agent",
    element: <SalesAgentLayout />,
    children: [
      { path: "dashboard", element: <SalesAgentDashboardPage /> },
      { path: "customers", element: <SalesAgentCustomersPage /> },
      { path: "orders", element: <SalesAgentOrdersPage /> },
      { path: "reports", element: <SalesAgentReportsPage /> },
      { path: "settings", element: <SalesAgentSettingsPage /> },
    ],
  },
]);

export default router;
