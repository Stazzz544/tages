import axios from "axios"
import { Materials } from "../models/IFilterMaterials"
import { productCards } from "../models/IProductCard"
import { AppDispatch } from "../store"
import { materialsFetching, materialsFetchingSucces } from "./filterMaterialsSlice"
import { productsDataFetching, productsDataFetchingSuccess } from "./productCardSlice"

const backendUrlMaterialsData = './backend/materials.json'
const backendUrlProductCardsData = './backend/items.json'

export const fetchMaterials = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(materialsFetching())
		const response = await axios.get<Materials>(backendUrlMaterialsData)
		dispatch(materialsFetchingSucces(response.data))
	} catch (e) {
		console.log('Error in fetchMaterials: ', e)
	}
}

export const fetchProductCards = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(productsDataFetching())
		const response = await axios.get<productCards>(backendUrlProductCardsData)
		dispatch(productsDataFetchingSuccess(response.data))
	} catch (e) {
		console.log('Error in fetchMaterials: ', e)
	}
}