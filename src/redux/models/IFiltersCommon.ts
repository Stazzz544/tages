export type FilterCommon = {
	id: string | null;
	name: string;
}

export type FiltersCommon = Array<FilterCommon>

export interface FiltersCommonState {
	filtersCommon: Array<FilterCommon>;
	currentfilterCommon: string;
	isloading: boolean;
	error: string;
}