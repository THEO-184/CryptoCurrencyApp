import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import ProductsReducer from "../redux/ProductsReducer";
import CartItemReducer from "../redux/CartItemReducer";
import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	version: 1,
	storage,
};

const persistedProductReducer = persistReducer(persistConfig, ProductsReducer);
const persistedCartReducer = persistReducer(persistConfig, CartItemReducer);
const store = configureStore({
	reducer: { Products: persistedProductReducer, Cart: persistedCartReducer },
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;

export default store;
