import React, { useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import { useAppSelector } from "./app/hooks";
import Navbar from "./componments/Navbar";
import Footer from "./componments/Footer";
import Products from "./componments/Products";
import SideBar from "./componments/SideBar";
import GlobalStyle from "./index.styles";

function App() {
	const showNav = useAppSelector((state) => state.Cart.showNav);

	return (
		<div className={"App"}>
			<GlobalStyle />
			<Navbar />
			<Products />
			<SideBar />
			<Footer />
		</div>
	);
}

export default App;
