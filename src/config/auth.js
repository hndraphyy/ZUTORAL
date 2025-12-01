export const USERS = {
  manager: {
    displayName: import.meta.env.VITE_MANAGER_DISPLAYNAME,
    username: import.meta.env.VITE_MANAGER_USERNAME,
    email: import.meta.env.VITE_MANAGER_EMAIL,
    password: import.meta.env.VITE_MANAGER_PASSWORD,
    redirect: "/manager/dashboard",
  },
  sales: {
    displayName: import.meta.env.VITE_SALES_DISPLAYNAME,
    username: import.meta.env.VITE_SALES_USERNAME,
    email: import.meta.env.VITE_SALES_EMAIL,
    password: import.meta.env.VITE_SALES_PASSWORD,
    redirect: "/sales-agent/dashboard",
  },
};
