import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./main.css";
import { ContextualApp } from "./ContextualApp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContextualApp />
  </StrictMode>
);
