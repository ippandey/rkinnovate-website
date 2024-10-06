import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {YbugProvider} from 'ybug-react';
import { ReactLenis, useLenis } from 'lenis/react'
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <YbugProvider ybugId={import.meta.env.VITE_YBUG_PROJECT_ID}>
    <ReactLenis root>
      <App />
      </ReactLenis>
    </YbugProvider>
  </StrictMode>
);
