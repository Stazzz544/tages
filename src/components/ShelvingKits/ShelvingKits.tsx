
import { useEffect } from "react"
import { useAppDispatch } from "../../redux/hooks/redux"
import { fetchCommonFilter, fetchMaterials, fetchProductCards } from "../../redux/reducers/ActionCreators"
import ProductCardsFields from "../ProductCardsField/ProductCardsFields"
import FilterCommonDropdown from "../UI/FilterCommonDropdown"
import FilterMaterialDropdown from "../UI/FilterMaterialDropdown"
import "./css/ShelvingKits.css"

const ShelvingKits = () => {

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchMaterials())
		dispatch(fetchCommonFilter())
		dispatch(fetchProductCards())
	}, [])


	return (
		<div className="shelving-kits">
			<h1 className="shelving-kits__title">Комплекты стеллажных систем</h1>

			<div className="shelving-kits__filters-wrapper">
				<FilterCommonDropdown/>
				<FilterMaterialDropdown/>
			</div>

			<ProductCardsFields/>
		</div>
	)
}

export default ShelvingKits