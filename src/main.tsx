import React from "react";
import ReactDOM from "react-dom/client";
// Font self-hostati (niente richieste a Google Fonts → niente IP inviato a Google)
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import App from "./App";
import "./index.css";
import { initializeBrandPalette } from "./lib/palette";

void initializeBrandPalette();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
