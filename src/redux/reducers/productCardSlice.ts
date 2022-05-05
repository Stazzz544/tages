import { createSlice } from "@reduxjs/toolkit";
import { StateType } from "../models/IProductCard";




export const initialState: StateType =  {
	cards: [],
	isloading: false,
	error: ''
}

export const productCardSlice = createSlice({
	name: 'productCard',
	initialState,
	reducers: {

	}
})

export default productCardSlice.reducer;