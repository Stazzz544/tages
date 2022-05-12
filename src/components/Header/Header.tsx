import './css/Header.css'

const Header: React.FC = () => {
	return (
		<ul className="breadcrumb">
			<li className="breadcrumb__item">Главная</li>
			<li className="breadcrumb__item separator">/</li>
			<li className="breadcrumb__item">Системы хранения</li>
			<li className="breadcrumb__item separator">/</li>
			<li className="breadcrumb__item active">Комплекты стеллажных систем</li>
		</ul>
	)
}

export default Header