import React from 'react'
import { BsFillCartXFill } from "react-icons/bs"
import { useContext, useState } from "react"
import { contexto } from "./CartContext"
import { NavLink } from "react-router-dom"
import { toast } from 'react-toastify'
import { db } from "./Firebase"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"

const Cart = () => {

  const [buyInProgress, setbuyInProgress] = useState(false)
  const resultado = useContext(contexto)
  const { emptyCart, removeItem, cart, total } = resultado

  const carrito = cart

  const terminarCompra = () => {
    setbuyInProgress(true)
    const orden = {
      buyer: {
        nombre: "Daniel",
        telefono: "(011) 1234-5678",
        email: "danielmariño@gmail.com"
      },
      items: carrito,
      date: serverTimestamp(),
      total: total
    }
    const cartCollection = collection(db, "orders")
    const generateOrder = addDoc(cartCollection, orden)

    generateOrder
      .then(res => toast.success(`La compra se efectuo con exito, el ID de la compra es ${res.id}`))
      .catch((err) => toast.error(err))
      .finally(() => emptyCart())
      .finally(() => setbuyInProgress(false))
  }

  const price = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2})
  
  return (
    <>
      {carrito == 0 ? <div className="cartStyle"><p>El carrito esta vacio</p><BsFillCartXFill /><NavLink to="/"><button className="btnGoIndex">Ver mas productos</button></NavLink></div>
        :
        <>
          <div className="inCart">
            <div className="inCart__products">
              {carrito.map(item => (<div className="itemInCart" key={`uniqueID${item.id}`}>
                <img src={item.imagen}></img>
                <div className="itemInCart__details">
                  <h3><span>Titulo: </span>{item.item}</h3>
                  <h3><span>Precio: </span>{price.format(item.precio)}</h3>
                  <h3><span>Cantidad: </span>{item.stock}</h3>
                </div>
                <button onClick={() => { removeItem(item.id, item.stock, item.precio) }}>Borrar</button></div>))}
            </div>
            <div className="inCart__buttons">
              <p>Total: <span>{price.format(total)}</span></p>
              <hr></hr>
              <div className="inCart__buttons--buttons">
                {buyInProgress === false ? <button className="btnBuy" onClick={terminarCompra}>Terminar compra</button> : <button className="btnBuyInProgress">Espere, por favor</button> }
                <button className="btnClearCart" onClick={emptyCart}>Limpiar carrito</button>
                <NavLink to="/"><button className="btnGoIndex">Ver mas productos</button></NavLink></div>
            </div>
          </div>
        </>}
    </>
  )
}

export default Cart