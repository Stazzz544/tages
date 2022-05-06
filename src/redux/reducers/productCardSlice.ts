import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductCard, ProductCardState } from "../models/IProductCard";


export const initialState: ProductCardState =  {
	cards: [],
	isloading: false,
	error: ''
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
		}
	}
})

export default productCardSlice.reducer;

export const {
	productsDataFetching,
	productsDataFetchingSuccess,
	productsDataFetchingError,
} = productCardSlice.actions