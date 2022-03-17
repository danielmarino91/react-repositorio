import React from "react"
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"
import ItemDetailContainer from "./ItemDetailContainer"

function Item({producto})
{
    return(
            <div className='itemStyle'>
                <h3>{producto.nombre}</h3>
                <img src={producto.imagen}></img>
                <ItemCount initial={1} stock={producto.stock}/>
            </div> 
    )
}

export default Item