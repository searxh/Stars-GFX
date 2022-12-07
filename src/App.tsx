import React from "react";
import { Routes, Route } from "react-router-dom";
import Contacts from "./pages/Contacts";
import Orders from "./pages/Orders";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Contacts />} />
			<Route path="/orders" element={<Orders />} />
		</Routes>
	);
}

export default App;
