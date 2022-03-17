import React from 'react'
import { BsFillCartXFill } from "react-icons/bs";

const Cart = () => {
  return (
    <div className="cartStyle">
      <p>No hay productos agregados al carrito</p>
      <BsFillCartXFill />
    </div>
  )
}

export default Cart