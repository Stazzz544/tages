import axios from "axios"
import { useEffect } from "react"
import FilterDropdown from "../UI/FilterDropdown"
import "./css/ShelvingKits.css"
import { Materials } from "../../redux/models/IFilterMaterials"


const ShelvingKits = () => {

	useEffect(() => {
		fetchMaterials()
	}, [])

	async function fetchMaterials() {
		try {
			fetch("../../redux/models/IFilterMaterials.json")
			.then((response) => response.json())
			.then((data) => console.log(data))

			fetch('https://jsonplaceholder.typicode.com/posts/1')
			.then((response) => response.json())
			.then((json) => console.log(json));
			
	
		} catch (e) {
			console.log('erorrrrrr', e)
		}
	}




	return(
		<div className="shelvingKits">
			<h1 className="shelvingKits__title">Комплекты стеллажных систем</h1>
			<div className="shelvingKits__filters-wrapper">
				<FilterDropdown title="test"/>
				<FilterDropdown title="dd"/>
			</div>
		</div>
	)
}

export default ShelvingKits