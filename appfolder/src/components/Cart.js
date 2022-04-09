import React from 'react'
import { BsFillCartXFill } from "react-icons/bs"
import { useContext } from "react"
import { contexto } from "./CartContext"
import { NavLink } from "react-router-dom"
import { db } from "./Firebase"
import { collection } from "firebase/firestore"

const Cart = () => {

  const resultado = useContext(contexto)
  const { emptyCart, removeItem, cart, total } = resultado

  const carrito = cart

  // const cartCollection = collection(db, "productsInCart")
  // addDoc(cartCollection, {})

  return (
    <>
      {carrito == 0 ? <div className="cartStyle"><p>No hay productos agregados al carrito</p><BsFillCartXFill /><NavLink to="/"><button className="btnGoIndex">Ver mas productos</button></NavLink></div>
        :
        <>
          <div className="inCart">
            <div className="inCart__products">
              {carrito.map(item => (<div className="itemInCart" key={`uniqueID${item.id}`}>
                <img src={item.imagen}></img>
                <div className="itemInCart__details">
                  <h3><span>Titulo: </span>{item.item}</h3>
                  <h3><span>Precio: </span>${item.precio}</h3>
                  <h3><span>Cantidad: </span>{item.stock}</h3>
                </div>
                <button onClick={() => { removeItem(item.id, item.stock, item.precio) }}>Borrar</button></div>))}
            </div>
            <div className="inCart__buttons">
              <p>Total: <span>${total}</span></p>
              <hr></hr>
              <div className="inCart__buttons--buttons">
              <button className="btnClearCart" onClick={emptyCart}>Limpiar carrito</button>
              <NavLink to="/"><button className="btnGoIndex">Ver mas productos</button></NavLink></div>
              </div>
          </div>
        </>}
    </>
  )
}

export default Cart