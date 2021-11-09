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

// get products from Contentful
const client = contentful.createClient({
	space: "69zmk43v6ege",
	accessToken: "I6fhcXp5FM9WoNmysJAVDFS7n8s95Tn0OBL878kdmk0",
});
export const loadProducts = createAsyncThunk(
	"Products/loadProducts",
	async (): Promise<ReturnObject[]> => {
		const data = await client.getEntries({
			content_type: "shoppingCart",
		});
		const products = data.items;
		return products as Required<ReturnObject[]>;
	}
);

export interface ReturnObject {
	metadata: any;
	sys: any;
	fields: {
		title: string;
		total: number;
		price: number;
		image: ImageFileType;
		id: number;
	};
}

interface ProductsState {
	products: Required<Array<ReturnObject>>;

	status: StateStatus;
}

export enum StateStatus {
	loading = "LOADING",
	fulfilled = "FULFILLED",
	error = "ERROR",
}

const initialState: ProductsState = {
	products: [],
	status: StateStatus.loading,
};

const ProductsReducer = createSlice({
	name: "Products",
	initialState,
	reducers: {
		LOAD_ITEMS: (state, action: PayloadAction<ReturnObject[]>) => {
			state.products = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loadProducts.pending, (state, action) => {
				state.status = StateStatus.loading;
			})
			.addCase(
				loadProducts.fulfilled,
				(state, action: PayloadAction<ReturnObject[]>) => {
					state.status = StateStatus.fulfilled;
					state.products = action.payload.map((product, index) => {
						return {
							...product,
							fields: { ...product.fields, id: index, total: 0 },
						};
					});
					return state;
				}
			)
			.addCase(loadProducts.rejected, (state, action) => {
				state.status = StateStatus.error;
			});
	},
});

// ======SELECTRORS=====
export const selectProducts = (state: RootState) => state.Products.products;
export const { LOAD_ITEMS } = ProductsReducer.actions;
export default ProductsReducer.reducer;
