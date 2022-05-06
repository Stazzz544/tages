
import axios from "axios"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hooks/redux"
import { Material } from "../../redux/models/IFilterMaterials"
import { fetchMaterials, fetchProductCards } from "../../redux/reducers/ActionCreators"
import FilterMaterialDropdown from "../UI/FilterMaterialDropdown"
import "./css/ShelvingKits.css"



const ShelvingKits = () => {

	const dispatch = useAppDispatch()
	const materials: Array<Material> = useAppSelector((state) => state.filterMaterialsSlice.materials)

	

	useEffect(() => {
		dispatch(fetchMaterials())
		dispatch(fetchProductCards())
	}, [])








	return (
		<div className="shelving-kits">
			<h1 className="shelving-kits__title">Комплекты стеллажных систем</h1>
			<div className="shelving-kits__filters-wrapper">

				<FilterMaterialDropdown/>

			</div>
		</div>
	)
}

export default ShelvingKits