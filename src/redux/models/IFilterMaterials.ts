import { ProductCard } from "./IProductCard";

export type Material = {
	id: string;
	name: string;
}

export type Materials = Array<Material>

export interface MaterialsState {
	materials: Array<Material>;
	filtredProductCards: Array<ProductCard>
	currentMaterialFilter: string;
	isloading: boolean;
	error: string;
}

