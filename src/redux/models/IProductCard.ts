export interface ProductCard {
	id: string | null;
	name: string | null;
	code: string | null;
	price: {
		old_price: number | null;
		current_price: number
	},
	image: {
		url: string | null;
	},
	material: number | null;
}

export type productCards = Array<ProductCard>

export interface ProductCardState {
	cards: ProductCard[];
	isloading: boolean;
	error: string;
}