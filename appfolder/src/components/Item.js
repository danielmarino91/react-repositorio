import React from "react"

function Item({producto})
{
    return(
            <div className='itemStyle'>
                <h3>{producto.nombre}</h3>
                <p>{producto.precio}</p>
                <p>{producto.detalle}</p>
            </div> 
    )
}

export default Item