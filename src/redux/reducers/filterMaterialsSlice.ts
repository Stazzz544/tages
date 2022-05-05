import { createSlice } from "@reduxjs/toolkit";
import { StateType } from "../models/IFilterMaterials";


export const initialState: StateType = {
	materials: [],
	isloading: false,
	error: ''
}

export const filterMaterialsSlice = createSlice({
	name: 'filterMaterials',
	initialState,
	reducers: {
	}
})

export default filterMaterialsSlice.reducer;