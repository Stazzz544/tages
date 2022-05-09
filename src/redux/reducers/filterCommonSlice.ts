import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterCommon, FiltersCommonState } from "../models/IFiltersCommon";


export const initialState: FiltersCommonState = {
	filtersCommon: [],
	currentfilterCommon: 'Цена по возрастанию', //default state in figma
	isloading: false,
	error: ''
}

export const filterCommonSlice = createSlice({
	name: 'filtersCommon',
	initialState,
	reducers: {
		filtersCommonFetching(state) {
			state.isloading = true
		},
		filtersCommonFetchingSucces(state, action: PayloadAction<FilterCommon[]>) {
			state.isloading = false;
			state.error = '';
			state.filtersCommon = action.payload;

		},
		filtersCommonFetchingError(state, action: PayloadAction<string>) {
			state.error = action.payload;
		},
		changeCurrentFilter(state, action: PayloadAction<string>) {
			state.currentfilterCommon = action.payload;
		}
	}
})

export default filterCommonSlice.reducer;

export const {
	filtersCommonFetching, 
	filtersCommonFetchingSucces, 
	filtersCommonFetchingError,
	changeCurrentFilter,
} = filterCommonSlice.actions