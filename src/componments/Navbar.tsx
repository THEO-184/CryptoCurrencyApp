import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import BackgroundImg from "../images/Background.jpg";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import Avatar from "../images/default1.png";
import styled from "styled-components";
import { OPEN_CART } from "../redux/CartItemReducer";
import { ToastContainer } from "react-toastify";
// STYLEING

const NavContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	position: fixed;
	z-index: 70;
	top: 0;
	left: 0;
	width: 100%;
	padding: 3px 0;
	background: #e0efda;
	box-shadow: -1px 6px 5px -1px rgba(0, 0, 0, 0.75);
	-webkit-box-shadow: -1px 6px 5px -1px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: -1px 6px 5px -1px rgba(0, 0, 0, 0.75);

	button {
		display: block;
		background: transparent;
		border: none;
	}

	.cart-container {
		position: relative;
		cursor: pointer;
	}

	.cart-container span {
		position: absolute;
		background: #e49a7f;
		top: -12px;
		right: -5px;
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 20px;
		height: 20px;
		padding: 5px;
		border-radius: 50px;
	}
`;

const Img = styled.div`
	height: 80vh;
	max-width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
		url("https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
			no-repeat center center/cover;
	.module {
		height: 50%;
		width: 50%;
		background: rgba(255, 255, 255, 0.6);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.module h1 {
		font-size: 3rem;
		letter-spacing: 2px;
	}

	.module a {
		display: block;
		text-decoration: none;
		margin: 1rem;
		background: #dd7752;
		opacity: 0.9;
		padding: 1rem 2rem;
		text-align: center;
		color: #fff;
		text-transform: uppercase;
		transition: all 0.8s;
		border: none;
	}

	.module a:hover {
		background: rgba(255, 255, 255, 0.6);
		color: #222;
	}

	@media (max-width: 768px) {
		.module h1 {
			font-size: 1.5rem;
			letter-spacing: normal;
			text-align: center;
		}
	}
`;

const Navbar = () => {
	const dispatch = useAppDispatch();
	const totalProducts = useAppSelector((state) => state.Cart.TotalProducts);
	// OPEN CART
	const openCart = (): void => {
		dispatch(OPEN_CART(true));
	};

	return (
		<>
			<ToastContainer
				position="top-left"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				style={{ zIndex: 100 }}
			/>
			<NavContainer>
				<AiOutlineMenu style={{ fontSize: "1.5rem" }} />
				<img src={Avatar} alt="Theo" />
				<button className="cart-container" onClick={openCart}>
					<BsFillCartCheckFill style={{ fontSize: "1.5rem" }} />
					<span>{totalProducts}</span>
				</button>
			</NavContainer>

			<Img>
				<div className="module">
					<h1>Furniture Collection</h1>
					<a href="/">SHOP NOW</a>
				</div>
			</Img>
		</>
	);
};

export default Navbar;
