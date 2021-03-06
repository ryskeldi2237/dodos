import React , {useState}from 'react'
import Pizzas from './Pizzas'
import Loading from './Loading'

export default function Content({ load, data, response}) {
    const [activeItem , setActiveItem] = useState(0);
    function toggleActiveItem(index){
        setActiveItem(index)
    }
    const items = ['Пиццы' , 'Комбо' ,'Закуски' , 'Десерты' ,  'Напитки'],
          sizes = ['маленький' , 'средний' , 'большой'],
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
                          key={item}
                          onClick={() => toggleActiveItem(index)}
                          className={ activeItem === index ? 'active' : ''}
                          >{item}</li>
                      ))
                  }
                </ul>
              </div>
            </div>
            <h2 className="content__title">Все {items[activeItem].toLowerCase()}</h2>
            <div className={`content__items ${activeItem === 0 ? 'active-content': ''}`}>
                {
                  load ?
                  data.pizzas.map((items, index) => <Pizzas key={`${items}__${index}`} pizza={items} sizes={sizes} types={types} /> )
                  : 
                  Array(8).fill(<Loading />)  
                }
            </div>
            <div className={`content__items ${activeItem === 1 ? 'active-content': ''}`}>
              {
                load ?
                response.combos.map((items, index) => <Pizzas key={`${items}__${index}`} pizza={items} sizes={sizes} types={types}/> )
                : 
                Array(8).fill(<Loading />) 
              }
            </div>
            <div className={`content__items ${activeItem === 2 ? 'active-content': ''}`}>
              {
                  load ?
                  data.snacks.map((items, index) => <Pizzas key={`${items}__${index}`} pizza={items} sizes={sizes} types={types}/> )
                  : 
                  Array(8).fill(<Loading />)  
              }
            </div>
            <div className={`content__items ${activeItem === 3 ? 'active-content': ''}`}>
              {
                load ?
                data.desserts.map((items, index) => <Pizzas key={`${items}__${index}`} pizza={items} sizes={sizes} types={types}/> )
                : 
                Array(8).fill(<Loading />) 
              }
            </div>
            <div className={`content__items ${activeItem === 4 ? 'active-content': ''}`}>
              {
                load ?
                response.drinks.map((items, index) => <Pizzas key={`${items}__${index}`} pizza={items} sizes={sizes} types={types}/> )
                : 
                Array(8).fill(<Loading />) 
              }
            </div>
            </div>
        </div>
    )
}