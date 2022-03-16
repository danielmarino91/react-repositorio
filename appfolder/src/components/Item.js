import React from "react"
import ItemCount from "./ItemCount"

function Item({producto})
{
    return(
            <div className='itemStyle'>
                <h3>{producto.nombre}</h3>
                <img src={producto.imagen}></img>
                {/* <p className="itemStyle__price">{producto.precio}$</p>
                <p className="itemStyle__detail">{producto.detalle}</p> */}
                <ItemCount initial={1} stock={producto.stock}/>
            </div> 
    )
}

export default Item