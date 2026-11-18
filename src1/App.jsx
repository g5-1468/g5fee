import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Product } from "./pages/Product";
import { StoreApp } from "./StoreApp";
import { Layout } from "./components/layout";
import { P404 } from "./pages/P404";

export function App() {
    return (
        <BrowserRouter>
            <Layout />

            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/products"
                    element={<Product />}
                />

                <Route
                    path="/inventory"
                    element={<StoreApp />}
                />

                <Route
                    path="*"
                    element={<P404 />}
                />
            </Routes>
        </BrowserRouter>
    );
}