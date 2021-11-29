import React , { useState , useEffect }from 'react'
import Main from '../components/Main'
import Contact from '../components/Contact'
import Content from '../components/Content'

function Home() {
    const [sliders , setSliders] = useState([])
    const [pizzas , setPizzas] = useState([]);
    const [snacks , setSnacks] = useState([]);
    const [desserts ,setDesserts] = useState([]); 
    const [drinks , setDrinks] = useState([]);
    const [combos , setCombos] = useState([]);

    const items = ['Пиццы' , 'Комбо' ,'Закуски' , 'Десерты' ,  'Напитки'];
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/ryskeldi2237/json/db')
        .then((response) => response.json())
        .then((data) =>{ 
        setPizzas(data.pizzas);
        setSnacks(data.snacks);
        setDesserts(data.desserts);
    });
    fetch('https://my-json-server.typicode.com/ryskeldi2237/json-2/db')
        .then((response) => response.json())
        .then((data) =>{ 
        setSliders(data.sliders);
        setDrinks(data.drinks);
        setCombos(data.combos);
    });
    } , [])
    return (
        <div>
            <Main 
             sliders={sliders}
            />
            <Content items={items} pizzas={pizzas} snacks={snacks} desserts={desserts}
             drinks={drinks} combos={combos}/>
            <Contact/>
        </div>
    )
}

export default Home

