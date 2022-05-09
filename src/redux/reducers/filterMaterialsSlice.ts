import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Material, MaterialsState,  } from "../models/IFilterMaterials";
import { ProductCard } from "../models/IProductCard";


export const initialState: MaterialsState = {
	materials: [],
	filtredProductCards: [],
	currentMaterialFilter: 'Металл', //default state in figma
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
			state.currentMaterialFilter = action.payload;
		},
		filtredProductsDataFetchingSuccess(state, action: PayloadAction<ProductCard[]>) {
			state.isloading = false;
			state.error = '';
			state.filtredProductCards = action.payload;
		},

		
	}
})

export default filterMaterialsSlice.reducer;

export const {
	materialsFetching, 
	materialsFetchingSucces, 
	materialsFetchingError,
	changeCurrentFilter,
	filtredProductsDataFetchingSuccess,
} = filterMaterialsSlice.actions