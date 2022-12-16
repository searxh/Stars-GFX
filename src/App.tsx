import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Commissions from "./pages/Commissions";
import Contacts from "./pages/Contacts";
import LoginResult from "./pages/LoginResult";
import Orders from "./pages/Orders";
import Portfolio from "./pages/Portfolio";
import { GlobalStateProvider } from "./states";
import { StringToAnyType } from "./types";

export const all_routes: StringToAnyType = {
    "": "Contacts",
    commissions: "Commissions",
    orders: "Your Orders",
    portfolio: "Portfolio",
};

function App() {
    return (
        <GlobalStateProvider>
            <NavBar />
            <Routes>
                <Route path="/" element={<Contacts />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/commissions" element={<Commissions />} />
                <Route path="/authorized" element={<LoginResult />} />
            </Routes>
        </GlobalStateProvider>
    );
}

export default App;
