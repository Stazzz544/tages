import { useAppDispatch, useAppSelector } from "../../redux/hooks/redux";
import { MaterialsState } from "../../redux/models/IFilterMaterials";
import { ProductCard, ProductCardState } from "../../redux/models/IProductCard";
import "./css/ShelvingKitsProductCard.css"

const ShelvingKitsProductCard = () => {

	const dispatch = useAppDispatch();

	const addedToBasket = require("../../assets/productCard/addedToBasket.svg") as any;
	const basket = require("../../assets/productCard/basket.svg") as any;
	const favorites = require("../../assets/productCard/favorites.svg") as any;

	const productCards: MaterialsState = useAppSelector(state => state.filterMaterialsSlice)
	


	return (
		<div className="product-card__wrapper">

			{productCards.filtredProductCards.map(card =>
				<div key={card.id} className="product-card">
					<div className="product-card__img-wrapper">
						<img src={card.image.url ? card.image.url : ''} alt="" className="product-card__img" />
					</div>

					<div className="product-card__code">{card.code ? card.code : ''}</div>
					<h2 className="product-card__product-name">{card.name ? card.name : ''}</h2>

					<div className="product-card__footer-wrapper">
						<div className="product-card__price-wrapper">
							<div className="product-card__old-price">{card.price.old_price ? card.price.old_price : ''}</div>
							<div className="product-card__current-price">{card.price.current_price ? card.price.current_price : ''}</div>
						</div>

						<div className="product-card__button-wrapper">
							<div className="product-card__img-button-wrapper">
								<img src={basket.default} alt="" className="product-card__img-button" />
							</div>
							<div className="product-card__img-button-wrapper">
								<img src={favorites.default} alt="" className="product-card__img-button" />
							</div>
						</div>

					</div>
				</div>
			)}

		</div>




	)
}

export default ShelvingKitsProductCard