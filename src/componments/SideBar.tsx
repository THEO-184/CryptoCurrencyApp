import React from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { SideNav as SideNav, Cart } from "../styles/SideBar.styles";
import {
	CLOSE_SIDENAV,
	INCREASE_ITEM,
	DECREASE_ITEM,
	CLEAR_CART,
	DELETE_ITEM,
} from "../redux/CartItemReducer";
import { toast } from "react-toastify";

import { AiOutlineClose } from "react-icons/ai";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

// =======FUNCTIONAL COMPONENT
const SideBar = () => {
	// select properties from CartReducer
	const itemsInCart = useAppSelector((state) => state.Cart.itemsInCart);
	const dispatch = useAppDispatch();
	const showNav = useAppSelector((state) => state.Cart.showNav);
	const totalPrice = useAppSelector((state) => state.Cart.TotalPrice);
	console.log(itemsInCart);

	// close nav
	const closeNav = (e: React.MouseEvent<HTMLDivElement>) =>
		dispatch(CLOSE_SIDENAV(false));
	// increaseItem
	const handleIncrease = (id: number): void => {
		dispatch(INCREASE_ITEM(id));
	};
	// increaseItem
	const handleDecrease = (id: number): void => {
		dispatch(DECREASE_ITEM(id));
	};

	// clear cart
	const clearCart = () => {
		dispatch(CLEAR_CART(null));
		toast.warn("Cart Items cleared");
	};
	// delete from cart
	const deleteItem = (id: number) => {
		dispatch(DELETE_ITEM(id));
	};
	return (
		<SideNav className={`${showNav ? "active" : ""}`}>
			<div className="closeBtn" onClick={closeNav}>
				<AiOutlineClose style={{ fontSize: "1.5rem", color: "#de1009" }} />
			</div>
			<h1>Your Cart</h1>
			{/* create this for each product in cart item */}
			{itemsInCart.map((item) => {
				const {
					fields: {
						title,
						price,
						total,
						id,
						image: {
							fields: {
								file: { url },
							},
						},
					},
				} = item;
				return (
					<Cart key={id}>
						<div className="about-cart">
							<div className="img-container">
								<img src={url} alt="img" />
							</div>
							<div className="item-name">
								<h4>{title}</h4>
								<button
									onClick={() => deleteItem(id)}
									style={{
										margin: "5px 0",
										fontSize: "1rem",
										color: "#63adf2",
									}}
								>
									remove
								</button>
								<h5>{price}</h5>
							</div>
						</div>
						<div className="total-items">
							<button onClick={() => handleIncrease(id)}>
								{" "}
								<BiChevronUp
									style={{ fontSize: "1.7rem", color: "#63adf2" }}
								/>{" "}
							</button>
							<h4 style={{ margin: "10px 0" }}>{total}</h4>
							<button onClick={() => handleDecrease(id)}>
								{" "}
								<BiChevronDown
									style={{ fontSize: "1.7rem", color: "#63adf2" }}
								/>{" "}
							</button>
						</div>
					</Cart>
				);
			})}

			<div className="clear-cart-container">
				<h2>Total Price : ${totalPrice.toFixed(2)}</h2>
				<button onClick={() => clearCart()} className="clear-cart">
					CLEAR CART
				</button>
			</div>
		</SideNav>
	);
};

export default SideBar;
