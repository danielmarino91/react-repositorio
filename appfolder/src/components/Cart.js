import React from 'react'
import { BsFillCartXFill } from "react-icons/bs"
import { useContext } from "react"
import { contexto } from "./CartContext"

const Cart = () => {

  const resultado = useContext(contexto)
  const clear = resultado.clear

  // const carrito = resultado.carrito

  // if (carrito == 0)
  // {
  //   return (
  //     <>
  //       <div className="cartStyle"><p>No hay productos agregados al carrito</p><BsFillCartXFill /></div>
  //     </>
  //   )
  // }
  // else if (carrito != 0)
  // {
  //   return  (
  //   carrito.map(item => (<div className="itemInCart"><img src={"/assets/producto0.png"}></img><div className="itemInCart__details"><h3>{item.nombre}</h3><h3>{item.precio}</h3></div><button>Borrar</button></div>))
  //   )
  // }

  return (
    <>
    <div className="cartStyle"><p>No hay productos agregados al carrito</p><BsFillCartXFill /></div>
    <div><button className="btnClearCart" onClick={clear}>Limpiar carrito</button></div>
    </>
  )
}

export default Cart