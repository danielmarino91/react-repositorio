import React from "react"
import { Link } from "react-router-dom"

function Item({ producto }) {
    
    return (
        <Link to={`/item/${producto.id}`}>
            <div className='itemStyle'>
                <h3>{producto.nombre}</h3>
                <img src={producto.imagen}></img>
                <div className="gameGenreBadge">{producto.categoria}</div>
                <div className="stockAvaible">Stock disponible: {producto.stock}</div>
            </div>
        </Link>
    )
}

export default Item