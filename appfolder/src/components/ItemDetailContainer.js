import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'

const productosDetalle = 
  {
      id: "1",
      nombre: "Crash Bandicoot 4: It's About Time",
      imagen: "assets/producto0.png",
      info: "Juego de aventura y plataformas",
      precio: 9000,
      stock: 13,
  }

const productDetailPromise = new Promise((res) => {
  setTimeout(() => {
      res(productosDetalle)
  }, 1000);
})

function ItemDetailContainer() {
  const [productosDetalle, setProductosDetalle] = useState([])

  useEffect(() => {
      productDetailPromise
          .then((data) => setProductosDetalle(data))
          .catch((err) => console.log(err))
  })

  return (
      <>
          <ItemDetail detalle={productosDetalle} />
      </>
  )
}

export default ItemDetailContainer