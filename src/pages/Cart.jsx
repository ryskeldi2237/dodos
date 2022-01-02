import React  from 'react'
import { useDispatch,useSelector } from 'react-redux'

export default function Cart({item}) {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)
  function removeProduct(id){
    dispatch({type: 'REMOVE__PRODUCT', payload: id})
  }
    return (
        <div className="content-cart" >
          <span className="cart__close" onClick={() => item(false)}>✘</span>
          {
            products.length >= 1 ?
            products.map((product , index) => (
            <div className="cart__block" key={`${product}__${index}`}>
              <div className="cart__item">
                <img src={product.imageUrl} alt="img" className="cart__img"></img>
                <div className="cart__wrapper">
                <div className="cart__title">{product.name}</div>
                <div className="cart__info">
                  <div className="cart__price">{product.price} ₽</div>
                  <img 
                  onClick={() => removeProduct(product.id)} 
                  src="https://image.flaticon.com/icons/png/512/3102/3102186.png" className="cart__trash" alt="remove__icon"/>
                </div>
              </div>
            </div>
          </div>
            ))
            :
            <div className="container container--cart">
              <div className="cart cart--empty">
            <h2>Корзина пустая <icon>😕</icon></h2>
            <p>
              Вероятней всего, вы не заказывали ещё пиццу.<br />
              Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src="img/empty-cart.png" alt="Empty cart" />
          </div>
            </div>
          }
        </div>
    )
}