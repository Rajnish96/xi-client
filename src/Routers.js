import React from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "./Registration";
import Dashboard from "./Dashboard";

export default function Routers() {
    return (
        <Routes>
            <Route path="" element={<Registration />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    )
}
