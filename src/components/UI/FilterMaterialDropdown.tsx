import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/redux";
import { Material } from "../../redux/models/IFilterMaterials";
import { changeCurrentFilter } from "../../redux/reducers/filterMaterialsSlice";
import "./css/FilterDropdown.css"

const arrow = require("../../assets/dropdown/chevronBottom.svg") as any;



const FilterMaterialDropdown  = () => {
	const dispatch = useAppDispatch()

	const [isActive, setActive] = useState<string | boolean>("false");
	const handleToggle = () => setActive(!isActive);

	const {currentFilter, materials} = useAppSelector(state => state.filterMaterialsSlice)
	
	const changeFilter = (newCurrentFilter: any): void => {
		dispatch(changeCurrentFilter(newCurrentFilter))
		setActive(!isActive)
	}


	return (
		<div className="dropdown">
			<div className="dropdown__current-item">

				<div className="dropdown__item">
					<div className="dropdown__value">{currentFilter}</div>
				</div>
				<div className={isActive ? "dropdown__arrow" : "dropdown__arrow active" } onClick={handleToggle}>
					<img className="dropdown__arrow-img" src={arrow.default} alt="logo" />
				</div>

			</div>


			<div className={isActive ? "dropdown__hidden-items" : "dropdown__hidden-items active"}>
				{
					materials.map((material:Material): any => {
						return(
							<div onClick={() => {changeFilter(material.name)}} key={material.id} className="dropdown__item">
								<div  className="dropdown__value">{material.name}</div>
							</div>
						)
					})
				}
				

			</div>

		</div>
	)
}

export default FilterMaterialDropdown