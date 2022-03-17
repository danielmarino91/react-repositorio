import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
  const [productosDetalle, setProductosDetalle] = useState([])

  useEffect(() => {

    const productosDetalle =
    {
      id: "1",
      nombre: "Crash Bandicoot 4: It's About Time",
      imagen: "assets/producto0.png",
      info: "Juego de aventura y plataformas",
      precio: 9000,
      stock: 13,
    }

    const productDetailPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productosDetalle)
      }, 1000);
    })
    productDetailPromise
      .then((data) => {setProductosDetalle(data)})
      .catch((err) => {toast.error(err)})
  }, [])

  return (
    <>
      <ItemDetail detalle={productosDetalle} />
    </>
  )
}

export default ItemDetailContainer