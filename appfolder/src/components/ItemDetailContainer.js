import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import ItemDetail from './ItemDetail'
import JUEGOS from "./db_juegos.json"

function ItemDetailContainer() {
  const [productosDetalle, setProductosDetalle] = useState([])

  useEffect(() => {
    
    const productosDetalle = JUEGOS[0];

    const productDetailPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productosDetalle)
      }, 1000);
    })
    productDetailPromise
      .then((data) => {setProductosDetalle(data)})
      .catch((err) => {toast.error(err)})
  }, [])

  return(
    <>
      <ItemDetail detalle={productosDetalle} />
    </>
  )
}

export default ItemDetailContainer