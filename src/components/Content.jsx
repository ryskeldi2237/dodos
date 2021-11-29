import React , {useState}from 'react'
import Pizzas from './Pizzas'
import Loading from './Loading'

function Content({items , load, data, response}) {
    const [activeItem , setActiveItem] = useState(0);
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
                          onClick={() => toggleActiveItem(index)}
                          className={ activeItem === index ? 'active' : ''}
                          >{item}</li>
                      ))
                  }
                </ul>
              </div>
            </div>
            <h2 className="content__title">Все {items[activeItem].toLowerCase()}</h2>
            <div className={activeItem === 0 ? 'content__items active-content' : 'content__items'}>
                {
                  load ?
                  data.pizzas.map(items => <Pizzas pizza={items} sizes={sizes} types={types} /> )
                  : 
                  Array(8).fill(<Loading />)  
                }
            </div>
            <div  className={activeItem === 1 ? 'content__items active-content' : 'content__items'}>
              {
                load ?
                response.combos.map(items => <Pizzas pizza={items} sizes={sizes} types={types} /> )
                : 
                Array(8).fill(<Loading />) 
              }
            </div>
            <div  className={activeItem === 2 ? 'content__items active-content' : 'content__items'}>
              {
                  load ?
                  data.snacks.map(items => <Pizzas pizza={items} sizes={sizes} types={types} /> )
                  : 
                  Array(8).fill(<Loading />)  
              }
            </div>
            <div  className={activeItem === 3 ? 'content__items active-content' : 'content__items'}>
              {
                load ?
                data.desserts.map(items => <Pizzas pizza={items} sizes={sizes} types={types} /> )
                : 
                Array(8).fill(<Loading />) 
              }
            </div>
            <div  className={activeItem === 4 ? 'content__items active-content' : 'content__items'}>
              {
                load ?
                response.drinks.map(items => <Pizzas pizza={items} sizes={sizes} types={types} /> )
                : 
                Array(8).fill(<Loading />) 
              }
            </div>
            </div>
        </div>
    )
}

export default Content
