import React , {useState}from 'react'
import Pizzas from './Pizzas'
import Loading from './Loading'

function Content({items , pizzas , snacks , desserts , drinks , combos , loading}) {
    const [activeItem , setActiveItem] = useState('Пиццы');
    function toggleActiveItem(index){
        setActiveItem(index)
    }
    const sizes = ['маленький' , 'средний' , 'большой'],
          types = ['тонкое' , 'традиционное'];
    return (
        <div className="content">
          <div className="container">
            <div className="content__top">
              <div className="categories">
                <ul>
                  {
                      items.map((item , index) => (
                          <li
                          key={`item_${index}`}
                          onClick={() => toggleActiveItem(item)}
                          className={ activeItem === item ? 'active' : ''}
                          >{item}</li>
                      ))
                  }
                </ul>
              </div>
            </div>
            <h2 className="content__title">Все {activeItem.toLowerCase()}</h2>
            <div className={activeItem === 'Пиццы' ? 'content__items active-content' : 'content__items'}>
                {
                    loading ?
                    pizzas.map(items => <Pizzas pizza={items} sizes={sizes} types={types} /> )
                    :
                    pizzas.map(items => <Loading items={items}/> )
                    
                }
            </div>
            <div  className={activeItem === 'Комбо' ? 'content__items active-content' : 'content__items'}>
              {
                combos.map(items => <Pizzas pizza={items} types={types} sizes={sizes}/>)
              }
            </div>
            <div  className={activeItem === 'Закуски' ? 'content__items active-content' : 'content__items'}>
              {
                snacks.map(items => <Pizzas pizza={items} sizes={sizes} types={types} />)
              }
            </div>
            <div  className={activeItem === 'Десерты' ? 'content__items active-content' : 'content__items'}>
              {
                desserts.map(items => <Pizzas pizza={items} sizes={sizes} types={types} />)
              }
            </div>
            <div  className={activeItem === 'Напитки' ? 'content__items active-content' : 'content__items'}>
              {
                drinks.map(items => <Pizzas pizza={items} types={types} sizes={sizes}/>)
              }
            </div>
            
            </div>
        </div>
    )
}

export default Content
