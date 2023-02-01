import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home/Home";
import Layout from "./Layout/Layout";

import Lab1Task1 from "./Labs/Lab1/Task1";
import Lab1Task2 from "./Labs/Lab1/Task2";
import Lab1Task3 from "./Labs/Lab1/Task3";

import Lab2Task1 from "./Labs/Lab2/Task1";
import Lab2Task2 from "./Labs/Lab2/Task2";

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
                    path="/lab1/task1"
                    element={<Lab1Task1 />}
                />
                <Route
                    path="/lab1/task2"
                    element={<Lab1Task2 />}
                />
                <Route
                    path="/lab1/task3"
                    element={<Lab1Task3 />}
                />
                <Route
                    path="/lab2/task1"
                    element={<Lab2Task1 />}
                />
                <Route
                    path="/lab2/task2"
                    element={<Lab2Task2 />}
                />
                <Route
                    path="*"
                    element={<div>404</div>}
                />
            </Route>
        </Routes>
    );
};

export default App;
