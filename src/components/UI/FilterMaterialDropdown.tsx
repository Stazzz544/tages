import { useEffect, useState } from "react";
import { productCards } from "../../redux/models/IProductCard";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/redux";
import { Material } from "../../redux/models/IFilterMaterials";
import { changeCurrentFilter, filtredProductsDataFetchingSuccess } from "../../redux/reducers/filterMaterialsSlice";
import "./css/FilterDropdown.css"

const arrow = require("../../assets/dropdown/chevronBottom.svg") as any;

const FilterMaterialDropdown = () => {

	const notFiltredProductCards: productCards = useAppSelector(state => state.productCardSlice.cards)
	const { currentMaterialFilter, materials , filtredProductCards} = useAppSelector(state => state.filterMaterialsSlice)
	const dispatch = useAppDispatch()

	const [isActive, setActive] = useState<string | boolean>("false");

	const handleToggle = () => setActive(!isActive);
	
	useEffect(() => {
		if (filtredProductCards.length === 0) {
			dispatch(filtredProductsDataFetchingSuccess(notFiltredProductCards))
		}
	 });

	const changeFilter = (newCurrentFilter: any): void => {
		dispatch(changeCurrentFilter(newCurrentFilter.name))

		if (newCurrentFilter.id === '1') {
			dispatch(filtredProductsDataFetchingSuccess(notFiltredProductCards.filter((e: any) => e.material === 1)))

		} else if (newCurrentFilter.id === '2') {
			dispatch(filtredProductsDataFetchingSuccess(notFiltredProductCards.filter((e: any) => e.material === 2)))
		}

		setActive(!isActive)
	}

	return (
		<div className="dropdown">
			<div className="dropdown__discription-wrapper">
				<div className="dropdown__discription">Материал:</div>
			</div>
			<div className="dropdown__current-item">
				<div className="dropdown__item">
					<div className="dropdown__value">{currentMaterialFilter}</div>
				</div>
				<div className={isActive ? "dropdown__arrow" : "dropdown__arrow active"} onClick={handleToggle}>
					<img className="dropdown__arrow-img" src={arrow.default} alt="logo" />
				</div>
			</div>

			<div className={isActive ? "dropdown__hidden-items" : "dropdown__hidden-items active"}>
				{
					materials.map((material: Material): any => {
						return (
							<div onClick={() => { changeFilter(material) }} key={material.id} className="dropdown__item">
								<div className="dropdown__value">{material.name}</div>
							</div>
						)
					})
				}


			</div>

		</div>
	)
}

export default FilterMaterialDropdown