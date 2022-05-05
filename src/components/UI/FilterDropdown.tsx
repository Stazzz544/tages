import { useState } from "react";
import "./css/FilterDropdown.css"
const arrow = require("../../assets/dropdown/chevronBottom.svg") as any;

type TitleProps = {
	title: string;
 }

const FilterDropdown = ({title} : TitleProps) => {
	const [isActive, setActive] = useState<string | boolean>("false");
	
	const handleToggle = () => {
		setActive(!isActive);
	};

	console.log(title)


	return (
		<div className="dropdown">
			<div className="dropdown__current-item">

				<div className="dropdown__item">
					<div className="dropdown__value">Цена по возрастанию</div>
				</div>
				<div className={isActive ? "dropdown__arrow" : "dropdown__arrow active" } onClick={handleToggle}>
					<img className="dropdown__arrow-img" src={arrow.default} alt="logo" />
				</div>

			</div>

			<div className={isActive ? "dropdown__hidden-items" : "dropdown__hidden-items active"}>

				<div className="dropdown__item">
					<div className="dropdown__value">Цена по убыванию</div>
				</div>

			</div>

		</div>
	)
}

export default FilterDropdown