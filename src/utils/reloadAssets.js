const ASSETS_TO_PRELOAD = [
  "/assets/images/sidebar-bg.webp",

  "/assets/svg/logo-brand.svg",
  "/assets/svg/sidebar-icon/dashboard.svg",
  "/assets/svg/sidebar-icon/active/dashboard.svg",
  "/assets/svg/sidebar-icon/products.svg",
  "/assets/svg/sidebar-icon/active/products.svg",
  "/assets/svg/sidebar-icon/transactions.svg",
  "/assets/svg/sidebar-icon/active/transactions.svg",
  "/assets/svg/sidebar-icon/employees.svg",
  "/assets/svg/sidebar-icon/active/employees.svg",
  "/assets/svg/sidebar-icon/customers.svg",
  "/assets/svg/sidebar-icon/active/customers.svg",
  "/assets/svg/sidebar-icon/orders.svg",
  "/assets/svg/sidebar-icon/active/orders.svg",
  "/assets/svg/sidebar-icon/reports.svg",
  "/assets/svg/sidebar-icon/active/reports.svg",
  "/assets/svg/sidebar-icon/settings.svg",
  "/assets/svg/sidebar-icon/active/settings.svg",
  "/assets/svg/sidebar-icon/logout-light.svg",
];

export const preloadAssets = () => {
  ASSETS_TO_PRELOAD.forEach((src) => {
    if (src.endsWith(".webp") || src.endsWith(".png") || src.endsWith(".jpg")) {
      const img = new Image();
      img.src = src;
    } else if (src.endsWith(".svg")) {
      const svg = new Image();
      svg.src = src;
    }
  });
};
