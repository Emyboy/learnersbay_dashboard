import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../template_css/css/vendors.css";
import "../template_css/dist/leaflet.css";
import "../template_css/css/main.css";
import { useSelector } from "react-redux";
import { MainAppStore } from "../interfaces";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Overview from "../pages/Overview/Overview";
import Forum from "../pages/Forum/Forum";
import AppLoading from "../components/AppLoading";
import MasterControl from "../components/MasterControl";
import AllPopups from "../components/Popups/AllPopups";

export default function MainAppRoute() {
    const { user } = useSelector((state: MainAppStore) => state.auth);

    return (
        <div>
            <AllPopups />
            <AppLoading />
            <MasterControl />
            <BrowserRouter>
                {!user ? (
                    <Routes>
                        <Route path="*" element={<Login />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                ) : (
                    <Routes>
                        <Route path="/" element={<Overview />} />
                        <Route path="/forum" element={<Forum />} />
                    </Routes>
                )}
            </BrowserRouter>
        </div>
    );
}
