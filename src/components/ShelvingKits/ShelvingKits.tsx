import FilterDropdown from "../UI/FilterDropdown"
import "./css/ShelvingKits.css"



const ShelvingKits: React.FC = () => {
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