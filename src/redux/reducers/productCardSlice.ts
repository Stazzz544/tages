import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductCard, ProductCardState } from "../models/IProductCard";


export const initialState: ProductCardState =  {
	cards: [],
	isloading: false,
	error: '',
	basket: [],
	favorite: [],
}

export const productCardSlice = createSlice({
	name: 'productCard',
	initialState,
	reducers: {
		productsDataFetching(state) {
			state.isloading = true
		},
		productsDataFetchingSuccess(state, action: PayloadAction<ProductCard[]>) {
			state.isloading = false;
			state.error = '';
			state.cards = action.payload;
		},
		productsDataFetchingError(state, action: PayloadAction<string>) {
			state.error = action.payload;
		},
		addToBusket(state, action: PayloadAction<Array<string>>) {
			state.basket = action.payload;
		},
		addToFavorit(state, action: PayloadAction<Array<string>>) {
			state.favorite = action.payload;
		}

	}
})

export default productCardSlice.reducer;

export const {
	productsDataFetching,
	productsDataFetchingSuccess,
	productsDataFetchingError,
	addToBusket,
	addToFavorit,
} = productCardSlice.actions