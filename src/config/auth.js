export const USERS = {
  manager: {
    username: import.meta.env.VITE_MANAGER_USERNAME,
    email: import.meta.env.VITE_MANAGER_EMAIL,
    password: import.meta.env.VITE_MANAGER_PASSWORD,
    redirect: "/manager/dashboard",
  },
  sales: {
    username: import.meta.env.VITE_SALES_USERNAME,
    email: import.meta.env.VITE_SALES_EMAIL,
    password: import.meta.env.VITE_SALES_PASSWORD,
    redirect: "/sales-agent/dashboard",
  },
};
