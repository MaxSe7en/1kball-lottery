import React from "react";
import "./index.css"
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/Product/Product";
import About from "./components/About/About";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			{/* <Home /> */}
			{/* <Product /> */}
			<About />
            <GlobalStyle />
		</BrowserRouter>
	);
};

export default App;
