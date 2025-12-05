import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { preloadAssets } from "./utils/reloadAssets.js";
import router from "./router/Router.jsx";
import "./styles/index.css";

preloadAssets();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
