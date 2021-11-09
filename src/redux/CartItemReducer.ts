import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
// import { ReturnObject } from "../App";
import { RootState } from "../app/store";
const contentful = require("contentful");

type ImageFileType = {
	metadata: any;
	sys: any;
	fields: {
		tile: string;
		file: { url: string; details: any; fileName: string; contentType: string };
	};
};

export interface NewReturnObject {
	metadata: any;
	sys: any;
	fields: {
		title: string;
		total: number;
		id: number;
		price: number;
		image: ImageFileType;
	};
}

interface ProductsState {
	itemsInCart: Required<Array<NewReturnObject>>;
	TotalProducts: number;
	status: StateStatus;
	TotalPrice: number;
	showNav: boolean;
	bodyOverlay: boolean;
}

enum StateStatus {
	loading = "LOADING",
	fulfilled = "FULFILLED",
	error = "ERROR",
}

const initialState: ProductsState = {
	itemsInCart: [],
	TotalProducts: 0,
	status: StateStatus.loading,
	TotalPrice: 0,
	showNav: false,
	bodyOverlay: false,
};

const CartIReducer = createSlice({
	name: "Cart",
	initialState,
	reducers: {
		OPEN_CART: (state, action: PayloadAction<boolean>) => {
			state.showNav = action.payload;
		},
		CLEAR_CART: (state, action: PayloadAction<null>) => {
			state.itemsInCart = [];
			state.TotalPrice = 0;
			state.TotalProducts = 0;
			state.showNav = false;
		},
		ADD_TO_CART: (state, action: PayloadAction<NewReturnObject>) => {
			state.itemsInCart.push(action.payload);
			state.TotalProducts += 1;
			state.bodyOverlay = true;
			state.showNav = true;
			state.TotalPrice += action.payload.fields.price;
		},

		CLOSE_SIDENAV: (state, action: PayloadAction<boolean>) => {
			state.showNav = action.payload;
		},

		INCREASE_ITEM: (state, action: PayloadAction<number>) => {
			state.itemsInCart = state.itemsInCart.map((item) => {
				const {
					fields: { total, price },
				} = item;
				if (item.fields.id === action.payload) {
					state.TotalPrice += price;
					state.TotalProducts += 1;
					return {
						...item,
						fields: { ...item.fields, total: total + 1 },
					};
				}
				return item;
			});
		},

		DECREASE_ITEM: (state, action: PayloadAction<number>) => {
			state.itemsInCart = state.itemsInCart.map((item) => {
				const {
					fields: { total, price },
				} = item;
				if (item.fields.id === action.payload) {
					if (total > 0) {
						state.TotalPrice -= price;
						state.TotalProducts -= 1;
					}
					return {
						...item,
						fields: { ...item.fields, total: total === 0 ? 0 : total - 1 },
					};
				}
				return item;
			});
		},

		DELETE_ITEM: (state, action: PayloadAction<number>) => {
			const newPrice: number = state.itemsInCart
				.filter((item) => item.fields.id === action.payload)
				.reduce<number>(
					(total, item) => total - item.fields.price * item.fields.total,
					state.TotalPrice
				);
			state.TotalPrice = newPrice;
			state.itemsInCart = state.itemsInCart.filter(
				(item) => item.fields.id !== action.payload
			);

			// return state;
		},
	},
});

// ======SELECTRORS=====
export const selectCartItems = (state: RootState) => state.Cart.itemsInCart;
export const {
	ADD_TO_CART,
	CLOSE_SIDENAV,
	INCREASE_ITEM,
	DECREASE_ITEM,
	OPEN_CART,
	CLEAR_CART,
	DELETE_ITEM,
} = CartIReducer.actions;
export default CartIReducer.reducer;
