export interface ProductCard {
	"id": string | null;
	"name": string | null;
	"code": string | null;
	"price": {
		"old_price": number | null;
		"current_price": number | null;
	},
	"image": {
		"url": string | null;
	},
	"material": number | null;
}

export interface StateType {
	cards: ProductCard[];
	isloading: boolean;
	error: string;
}