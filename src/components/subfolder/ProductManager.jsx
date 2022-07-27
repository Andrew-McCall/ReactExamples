import { useState } from "react";
import Basket from "./Basket";
import Item from "./ItemButton";

const Shopping = () => {

    const [basket, setBasket] = useState([])

    const addItem = (i)=>{ 
        setBasket([...basket, i])
    }
    
    const remove = (index) => {
        let newBasket = [...basket]
        newBasket.splice(index, 1)
        setBasket(newBasket)
    }

    return(
    <>
        <h1>Shopping</h1>

        <Basket basket={basket} remove={remove}/>

        <br/>

        <Item name="Socks" id={1} addItem={addItem}/>
        <Item name="Shoes" id={2} addItem={addItem}/>
        <Item name="Sandels" id={31} addItem={addItem}/>
        <Item name="Cats" id={4} addItem={addItem}/>

    </>
    )

}

export default Shopping;