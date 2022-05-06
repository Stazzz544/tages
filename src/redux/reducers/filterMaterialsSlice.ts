import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Material, MaterialsState,  } from "../models/IFilterMaterials";


export const initialState: MaterialsState = {
	materials: [],
	currentFilter: 'Металл', //default state in figma
	isloading: false,
	error: ''
}

export const filterMaterialsSlice = createSlice({
	name: 'filterMaterials',
	initialState,
	reducers: {
		materialsFetching(state) {
			state.isloading = true
		},
		materialsFetchingSucces(state, action: PayloadAction<Material[]>) {
			state.isloading = false;
			state.error = '';
			state.materials = action.payload;

		},
		materialsFetchingError(state, action: PayloadAction<string>) {
			state.error = action.payload;
		},
		changeCurrentFilter(state, action: PayloadAction<string>) {
			state.currentFilter = action.payload;
		}
	}
})

export default filterMaterialsSlice.reducer;

export const {
	materialsFetching, 
	materialsFetchingSucces, 
	materialsFetchingError,
	changeCurrentFilter,
} = filterMaterialsSlice.actions