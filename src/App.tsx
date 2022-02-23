import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import LoginPage from "./pages/Login";
import HomePage from "pages/Home";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={<LoginPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
