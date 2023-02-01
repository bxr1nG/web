import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home/Home";
import Layout from "./Layout/Layout";

type AppProps = Record<string, unknown>;

const App: React.FC<AppProps> = () => {
    return (
        <Routes>
            <Route
                index
                element={<Home />}
            />
            <Route element={<Layout />}>
                <Route
                    path="*"
                    element={<div>404</div>}
                />
            </Route>
        </Routes>
    );
};

export default App;
