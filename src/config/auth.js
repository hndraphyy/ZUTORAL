export const USERS = {
  manager: {
    username: import.meta.env.VITE_MANAGER_USERNAME,
    password: import.meta.env.VITE_MANAGER_PASSWORD,
    redirect: "/manager/dashboard",
  },
  sales: {
    username: import.meta.env.VITE_SALES_USERNAME,
    password: import.meta.env.VITE_SALES_PASSWORD,
    redirect: "/sales-agent/dashboard",
  },
};
