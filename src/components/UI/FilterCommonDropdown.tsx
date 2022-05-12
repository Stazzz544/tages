import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/redux";
import { FilterCommon } from "../../redux/models/IFiltersCommon";
import { changeCurrentFilter } from "../../redux/reducers/filterCommonSlice";
import { filtredProductsDataFetchingSuccess } from "../../redux/reducers/filterMaterialsSlice";
import "./css/FilterDropdown.css"

const arrow = require("../../assets/dropdown/chevronBottom.svg") as any;



const FilterMaterialDropdown  = () => {

	const { currentfilterCommon, filtersCommon } = useAppSelector(state => state.filterCommonSlice)
	const { filtredProductCards } = useAppSelector(state => state.filterMaterialsSlice)
	const dispatch = useAppDispatch()

	const [isActive, setActive] = useState<string | boolean>("false");
	
	const handleToggle = () => setActive(!isActive);

	const changeFilter = (newCurrentFilter: any): void => {
		dispatch(changeCurrentFilter(newCurrentFilter))
		
		const json = JSON.stringify(filtredProductCards)
		const copyProductCards = JSON.parse(json)

		if (newCurrentFilter === 'По убыванию') {
			copyProductCards.sort((a:any , b:any ) => (b.price.current_price - a.price.current_price))
			dispatch(filtredProductsDataFetchingSuccess(copyProductCards))
		} else if(newCurrentFilter === 'По возрастанию') {
			copyProductCards.sort((a:any , b:any ) => (a.price.current_price - b.price.current_price))
			dispatch(filtredProductsDataFetchingSuccess(copyProductCards))
		}
		setActive(!isActive)
	}

	return (
		<div className="dropdown"> 
			<div className="dropdown__discription-wrapper">
				<div className="dropdown__discription">Сортировать по:</div>
			</div>
			<div className="dropdown__current-item">
				<div className="dropdown__item">
					<div className="dropdown__value">{currentfilterCommon}</div>
				</div>
				<div className={isActive ? "dropdown__arrow" : "dropdown__arrow active" } onClick={handleToggle}>
					<img className="dropdown__arrow-img" src={arrow.default} alt="logo" />
				</div>
			</div>

			<div className={isActive ? "dropdown__hidden-items" : "dropdown__hidden-items active"}>
				{
					filtersCommon.map((material:FilterCommon): any => {
						return(
							<div onClick={() => {changeFilter(material.name)}} key={material.id} className="dropdown__item">
								<div className="dropdown__value">{material.name}</div>
							</div>
						)
					})
				}
				

			</div>

		</div>
	)
}

export default FilterMaterialDropdowng