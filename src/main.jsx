import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index3.css";
import { Header } from "./Header.jsx";
import Footer from "./Footer.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Header />
        <div style={{ minHeight: "calc(100vh - 4rem)" }}></div>
        <Footer />
    </StrictMode>
);

