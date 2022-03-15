import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'

const productosDetalle = [
  {
    nombre: "Crash Bandicoot 4: It's About Time",
    imagen: "assets/producto0.png",
    info: "Juego de aventura y plataformas",
    precio: 9000,
  }
]

const productDetailPromise = new Promise((res) => {
  setTimeout(() => {
    res(productosDetalle)
  }, 2000);
})

function ItemDetailContainer() {
  const [detalle, setDetail] = useState()

  useEffect(() => {
    productDetailPromise
      .then((data) => setDetail(data))
      .catch((err) => console.log(err))
  })

  return (
    <>
      <ItemDetail detalle={detalle} />
    </>
  )
}

export default ItemDetailContainer