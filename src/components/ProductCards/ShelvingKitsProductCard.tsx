import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/redux";
import { MaterialsState } from "../../redux/models/IFilterMaterials";
import { addToBusket, addToFavorit } from "../../redux/reducers/productCardSlice";
import "./css/ShelvingKitsProductCard.css"

const ShelvingKitsProductCard = () => {
	const dispatch = useAppDispatch()

	const {favorite, basket} = useAppSelector(state => state.productCardSlice)

	useEffect(() =>{
		if(localStorage.getItem('userFavoritGoods')) {
			dispatch(addToFavorit(JSON.parse(localStorage.getItem('userFavoritGoods') + '')))
		} else {
			localStorage.setItem('userFavoritGoods', '[]')
		}

		if(localStorage.getItem('userBusketGoods')) {
			dispatch(addToBusket(JSON.parse(localStorage.getItem('userBusketGoods') + '')))
		} else {
			localStorage.setItem('userBusketGoods', '[]')
		}
	}, [])

	const addedToBasketImg = require("../../assets/productCard/addedToBasket.svg") as any;
	const basketImg = require("../../assets/productCard/basket.svg") as any;
	const favoritImg = require("../../assets/productCard/favorites.svg") as any;
	const inFavoritImg = require("../../assets/productCard/inFavorit.svg") as any;


	const productCards: MaterialsState = useAppSelector(state => state.filterMaterialsSlice)
	const addIntoFavorite = (cardId: string) => favoritAndBasketSelector(cardId, 'userFavoritGoods', addToFavorit)
	const addIntoBasket = (cardId: string) => favoritAndBasketSelector(cardId, 'userBusketGoods', addToBusket)
	

	const favoritAndBasketSelector = (cardId: string, locStorItem: string , dispatchFunc: any) => {
		const localStorageDataArr: any[] = JSON.parse(localStorage.getItem(locStorItem) + '')
		const isIdInArr = localStorageDataArr.find(e => e === cardId)

		if(isIdInArr === undefined) {
			localStorageDataArr.push(cardId)
			localStorage.setItem(locStorItem, JSON.stringify(localStorageDataArr))
			dispatch(dispatchFunc(localStorageDataArr))
		} else {
			const removeChosenItem = localStorageDataArr.filter(e => e !== cardId)
			localStorage.setItem(locStorItem, JSON.stringify(removeChosenItem))
			dispatch(dispatchFunc(removeChosenItem))
		}
	}


	return (
		<div className="product-card__wrapper">

			{productCards.filtredProductCards.map(card =>
				<div key={card.id} className="product-card">
					<div className="product-card__img-wrapper">
						<img src={card.image.url ? '.' + card.image.url : ''} alt="product" className="product-card__img" />
					</div>

					<div className="product-card__code">{card.code ? card.code : ''}</div>
					<h2 className="product-card__product-name">{card.name ? card.name : ''}</h2>

					<div className="product-card__footer-wrapper">
						<div className="product-card__price-wrapper">
							<div className="product-card__old-price">{card.price.old_price ? card.price.old_price : ''}</div>
							<div className="product-card__current-price">{card.price.current_price ? card.price.current_price : ''}</div>
						</div>

						<div className="product-card__button-wrapper">
							<div onClick={() => {addIntoBasket(card.id)}} className="product-card__img-button-wrapper">
								<img 
								src=
								{
									basket.find(e => e === card.id) ?
									addedToBasketImg.default
									:
									basketImg.default
								} 
								alt="" 
								className="product-card__img-button" />
							</div>
							<div  onClick={() => {addIntoFavorite(card.id)}} className="product-card__img-button-wrapper">
								<img 
								src={
									favorite.find(e => e === card.id) ?
									inFavoritImg.default
									:
									favoritImg.default
								} 
								alt="" 
								className="product-card__img-button" />
							</div>
						</div>

					</div>
				</div>
			)}

		</div>




	)
}

export default ShelvingKitsProductCard