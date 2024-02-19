import React from "react";
import { createRoot } from "react-dom";
import AppRoutes from "./routes";
import { GlobalStyles } from "./ui/styles/GlobalStyles";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <AppRoutes />
  </React.StrictMode>
);
