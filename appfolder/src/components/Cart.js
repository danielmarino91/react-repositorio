import React from 'react'
import { BsFillCartXFill } from "react-icons/bs"
import { useContext } from "react"
import { contexto } from "./CartContext"

const Cart = () => {

  const resultado = useContext(contexto)
  const { emptyCart, removeItem, cart, priceTotal } = resultado

  const carrito = cart

  if (carrito == 0) {
    return (
      <>
        <div className="cartStyle"><p>No hay productos agregados al carrito</p><BsFillCartXFill /></div>
      </>
    )
  }
  else if (carrito != 0) {
    return (
      <>
        {carrito.map(item => (<div className="itemInCart" key={`uniqueID${item.id}`}>
          <img src={item.imagen}></img>
          <div className="itemInCart__details">
            <h3>{item.item}</h3>
            <h3>${item.precio}</h3>
            <h3>Cantidad: {item.stock}</h3>
          </div>
          <button onClick={() => { removeItem(item.id) }}>Borrar</button></div>))}
        <div><button className="btnClearCart" onClick={emptyCart}>Limpiar carrito</button></div>
      </>
    )
  }
}

export default Cart