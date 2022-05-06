export type Material = {
	id: string | null;
	name: string;
}

export type Materials = Array<Material>

export interface MaterialsState {
	materials: Array<Material>;
	currentFilter: string;
	isloading: boolean;
	error: string;
}