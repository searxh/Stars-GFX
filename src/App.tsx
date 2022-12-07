import React from "react";
import { Routes, Route } from "react-router-dom";
import Contacts from "./pages/Contacts";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Contacts />} />
		</Routes>
	);
}

export default App;
