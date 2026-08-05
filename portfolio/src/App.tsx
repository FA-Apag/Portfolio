import { useEffect } from "react";

import "../style.css";
import Homepage from "./Pages/homepage";
import "./App.css";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";

export default function App() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app-container">
      <Homepage />
    </div>
  );
}
