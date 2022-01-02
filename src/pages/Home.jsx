import React , { useState , useEffect }from 'react'
import Main from '../components/Main'
import Contact from '../components/Contact'
import Content from '../components/Content'

export default function Home() {
    const [load, setLoad] = useState(false)
    const [sliders , setSliders] = useState([]);
    const [data, setData] = useState({});
    const [response, setResponse] = useState({});
    const items = ['Пиццы' , 'Комбо' ,'Закуски' , 'Десерты' ,  'Напитки'];
    
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/ryskeldi2237/json/db')
        .then((response) => response.json())
        .then((data) => setData(data));
    fetch('https://my-json-server.typicode.com/ryskeldi2237/json-2/db')
        .then((response) => response.json())
        .then((response) =>{ 
        setSliders(response.sliders);
        setResponse(response)
        setTimeout(() => {
            setLoad(true)
        }, 500)
    });
    } , [])
    return (
        <div>
            <div className="test">
                <Main sliders={sliders}/>
            </div>
            <Content items={items} load={load} 
                data={data} response={response}/>
            <Contact/>
        </div>
    )
}