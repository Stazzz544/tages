export interface Materials {
	"id": string,
	"name": string,
}

export interface StateType {
	materials: Materials[];
	isloading: boolean;
	error: string;
}