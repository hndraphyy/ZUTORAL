import DashboardIcon from "/assets/svg/sidebar-icon/dashboard.svg?react";
import DashboardActiveIcon from "/assets/svg/sidebar-icon/active/dashboard.svg?react";
import ProductsIcon from "/assets/svg/sidebar-icon/products.svg?react";
import ProductsActiveIcon from "/assets/svg/sidebar-icon/active/products.svg?react";
import TransactionsIcon from "/assets/svg/sidebar-icon/transactions.svg?react";
import TransactionsActiveIcon from "/assets/svg/sidebar-icon/active/transactions.svg?react";
import EmployeesIcon from "/assets/svg/sidebar-icon/employees.svg?react";
import EmployeesActiveIcon from "/assets/svg/sidebar-icon/active/employees.svg?react";
import ReportsIcon from "/assets/svg/sidebar-icon/reports.svg?react";
import ReportsActiveIcon from "/assets/svg/sidebar-icon/active/reports.svg?react";
import SettingsIcon from "/assets/svg/sidebar-icon/settings.svg?react";
import SettingsActiveIcon from "/assets/svg/sidebar-icon/active/settings.svg?react";
import CustomersIcon from "/assets/svg/sidebar-icon/customers.svg?react";
import CustomersActiveIcon from "/assets/svg/sidebar-icon/active/customers.svg?react";
import OrdersIcon from "/assets/svg/sidebar-icon/orders.svg?react";
import OrdersActiveIcon from "/assets/svg/sidebar-icon/active/orders.svg?react";

import LogoutIcon from "/assets/svg/sidebar-icon/logout-light.svg?react";

export const managerLinks = [
  {
    to: "/manager/dashboard",
    label: "Dashboard",
    icon: DashboardIcon,
    iconActive: DashboardActiveIcon,
  },
  {
    to: "/manager/products",
    label: "Products",
    icon: ProductsIcon,
    iconActive: ProductsActiveIcon,
  },
  {
    to: "/manager/transactions",
    label: "Transactions",
    icon: TransactionsIcon,
    iconActive: TransactionsActiveIcon,
  },
  {
    to: "/manager/employees",
    label: "Employees",
    icon: EmployeesIcon,
    iconActive: EmployeesActiveIcon,
  },
  {
    to: "/manager/reports",
    label: "Reports",
    icon: ReportsIcon,
    iconActive: ReportsActiveIcon,
  },
  {
    to: "/manager/settings",
    label: "Settings",
    icon: SettingsIcon,
    iconActive: SettingsActiveIcon,
  },
];

export const salesLinks = [
  {
    to: "/sales-agent/dashboard",
    label: "Dashboard",
    icon: DashboardIcon, // bisa reuse
    iconActive: DashboardActiveIcon,
  },
  {
    to: "/sales-agent/customers",
    label: "Customers",
    icon: CustomersIcon,
    iconActive: CustomersActiveIcon,
  },
  {
    to: "/sales-agent/orders",
    label: "Orders",
    icon: OrdersIcon,
    iconActive: OrdersActiveIcon,
  },
  {
    to: "/sales-agent/reports",
    label: "Reports",
    icon: ReportsIcon,
    iconActive: ReportsActiveIcon,
  },
  {
    to: "/sales-agent/settings",
    label: "Settings",
    icon: SettingsIcon,
    iconActive: SettingsActiveIcon,
  },
];

export { LogoutIcon };
