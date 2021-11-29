import React , {useState}from 'react'
import Pizzas from './Pizzas'

function Content({items , pizzas , snacks , desserts , drinks , combos}) {
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
                  pizzas.map(items => <Pizzas pizza={items} sizes={sizes} types={types} /> )  
                }
            </div>
            <div  className={activeItem === 1 ? 'content__items active-content' : 'content__items'}>
              {
                combos.map(items => <Pizzas pizza={items} types={types} sizes={sizes}/>)
              }
            </div>
            <div  className={activeItem === 2 ? 'content__items active-content' : 'content__items'}>
              {
                snacks.map(items => <Pizzas pizza={items} sizes={sizes} types={types} />)
              }
            </div>
            <div  className={activeItem === 3 ? 'content__items active-content' : 'content__items'}>
              {
                desserts.map(items => <Pizzas pizza={items} sizes={sizes} types={types} />)
              }
            </div>
            <div  className={activeItem === 4 ? 'content__items active-content' : 'content__items'}>
              {
                drinks.map(items => <Pizzas pizza={items} types={types} sizes={sizes}/>)
              }
            </div>
            </div>
        </div>
    )
}

export default Content
