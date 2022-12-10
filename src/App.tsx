import React from "react";
import { Routes, Route } from "react-router-dom";
import Commissions from "./pages/Commissions";
import Contacts from "./pages/Contacts";
import Orders from "./pages/Orders";
import Portfolio from "./pages/Portfolio";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Contacts />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/commissions" element={<Commissions />} />
        </Routes>
    );
}

export default App;
