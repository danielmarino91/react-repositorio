import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'

const productos = 
  {
      id: "1",
      nombre: "Crash Bandicoot 4: It's About Time",
      imagen: "assets/producto0.png",
      detalle: "Juego de aventura y plataformas",
      precio: 9000,
      stock: 13,
  }

const productPromise = new Promise((res) => {
  setTimeout(() => {
      res(productos)
  }, 4000);
})

function ItemDetailContainer() {
  const [productos, setProductos] = useState([])

  useEffect(() => {
      productPromise
          .then((data) => setProductos(data))
          .catch((err) => console.log(err))
  })

  return (
      <>
          <ItemDetail productos={productos} />
      </>
  )
}

export default ItemDetailContainer