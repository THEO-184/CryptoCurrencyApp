import React, { ReactText, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
	LOAD_ITEMS,
	selectProducts,
	loadProducts,
	ReturnObject,
	StateStatus,
} from "../redux/ProductsReducer";
import {
	ADD_TO_CART,
	selectCartItems,
	NewReturnObject,
} from "../redux/CartItemReducer";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
	ProductsContainer,
	Title,
	GridContainer,
	Product,
} from "../styles/Products.styles";

interface ButtonObject {
	disabledId: number | null;
}

const Products = () => {
	const dispatch = useAppDispatch();
	const [darkOverlay, setOverlayType] = useState("");
	const [showBtn, setShowBtn] = useState(false);
	const [productId, setProductId] = useState(0);
	const [disableBtn, setDisableBtn] = useState<ButtonObject>({
		disabledId: null,
	});

	const products = useAppSelector(selectProducts);
	console.log(products);

	const status = useAppSelector((state) => state.Products.status);
	const cartItems = useAppSelector((state) => state.Cart.itemsInCart);

	// ======FUNCTIONS ======
	const handleMouseEnter = (
		e: React.MouseEvent<HTMLDivElement>,
		id: number
	): void => {
		// e.preventDefault();
		setProductId(id);
		setOverlayType("dark");
		setShowBtn(true);
	};

	const handleMouseLeave = (
		e: React.MouseEvent<HTMLDivElement>,
		id: number
	): void => {
		// e.preventDefault();
		setOverlayType("");
		setProductId(id);
	};

	const addToCart = (id: number): void => {
		const checkItem = cartItems.find((item) => item.fields.id === id);

		if (!checkItem) {
			const cartProduct: ReturnObject = products[id];
			// console.log(cartProduct);
			const newCartProducts: NewReturnObject = {
				...cartProduct,
				fields: { ...cartProduct.fields, total: 1 },
			};

			dispatch(ADD_TO_CART(newCartProducts));
			setDisableBtn({ disabledId: id });
			toast.success("item added to cart");
		} else {
			toast.error("item already in cart");
		}
	};

	// ====== END OF FUNCTIONS =====

	useEffect(() => {
		dispatch(loadProducts());
	}, []);

	if (status === StateStatus.loading) {
		return <Title>Loading...</Title>;
	}

	return (
		<ProductsContainer>
			<Title>Products</Title>
			<GridContainer>
				{products.map((product, index) => {
					const {
						fields: {
							title,
							price,
							id,
							image: {
								fields: {
									file: { url },
								},
							},
						},
					} = product;

					return (
						<>
							<Product key={index}>
								<img src={url} alt="img" />

								<div
									key={index}
									onMouseEnter={(e) => handleMouseEnter(e, index)}
									onMouseLeave={(e) => handleMouseLeave(e, index)}
									className={`overlay ${index === productId ? "dark" : ""}`}
								>
									<button
										key={index}
										onClick={() => addToCart(index)}
										disabled={disableBtn.disabledId === index}
										className="button"
									>
										{index === disableBtn.disabledId
											? "item in cart"
											: "Add To Cart"}
									</button>
								</div>
								<h4
									style={{
										pointerEvents: "none",
										cursor: "none",
										userSelect: "none",
									}}
								>
									{title}
								</h4>
								<h5
									style={{
										pointerEvents: "none",
										cursor: "none",
										userSelect: "none",
										color: "#dd7752",
									}}
								>
									${price}
								</h5>
							</Product>
						</>
					);
				})}
			</GridContainer>
		</ProductsContainer>
	);
};

export default Products;
