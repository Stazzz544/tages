import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ProductCard, StateType } from "../models/TProduct"



const initialState: StateType = {
	name: '',
	count: '',
	price: '',
	productCard: [] as Array<ProductCard>,
}

export const productCardSlice = createSlice({
	name: 'productCard',
	initialState,
	reducers: {
		// productCardGet(state, action: PayloadAction<ProductCard[]>) {
		// 	state.productCard = action.payload
		// },
	}
})

export default productCardSlice.reducer
export const { } = productCardSlice.actions
