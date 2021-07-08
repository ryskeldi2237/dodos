import React  from 'react'
import { observer } from 'mobx-react-lite'
import Store from '../store/store'

const Cart = observer(({item }) => {
  
    return (
        <div className="content-cart" >
          <span className="cart__close" onClick={() => item(false)}>✘</span>
          {
            Store.count >= 1 ?
            Store.store.map((items , id) => (
              <div className="cart__block">
            <div className="cart__item">
              <img src={items.imageUrl} alt="img" className="cart__img"></img>
              <div className="cart__wrapper">
              <div className="cart__title">{items.name}</div>
              <div className="cart__info">
                <div className="cart__price">{items.price} сомов</div>
                <img onClick={() => Store.removeElem(items.id)} src="https://image.flaticon.com/icons/png/512/3102/3102186.png" className="cart__trash"/>
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
})

export default Cart


{/* <div className="content">
<div className="container container--cart">
  
</div> */}


{/* <div className="cart__block">
            <div className="cart__item">
              <img src="https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg" alt="" className="cart__img"></img>
              <div className="cart__wrapper">
              <div className="cart__title">Пепперони Фреш</div>
              <div className="cart__info">
                <div className="cart__price">200 сом</div>
                <span >✘</span>
              </div>
              </div>
            </div>
          </div> */}
