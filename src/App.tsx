import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Commissions from "./pages/Commissions";
import Contacts from "./pages/Contacts";
import Dashboard from "./pages/Dashboard";
import LoginResult from "./pages/LoginResult";
import Orders from "./pages/Orders";
import Portfolio from "./pages/Portfolio";
import { GlobalStateProvider } from "./states";
import OrderPage from "./components/admin/pages/OrderPage";
import InfoPage from "./components/admin/pages/InfoPage";

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
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path="list" element={<OrderPage />} />
                    <Route path=":orderObj" element={<InfoPage />} />
                </Route>
            </Routes>
        </GlobalStateProvider>
    );
}

export default App;
