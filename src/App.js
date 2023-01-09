import React from "react";
import "./index.css"
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Home />
            <GlobalStyle />
		</BrowserRouter>
	);
};

export default App;
