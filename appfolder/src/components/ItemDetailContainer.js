import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import ItemDetail from './ItemDetail'
import JUEGOS from "./db_juegos.json"
import Loader from "./Loader"
import { useParams } from "react-router-dom"

function ItemDetailContainer() {
  const [productosDetalle, setProductosDetalle] = useState([])
  const [Loading, setLoading] = useState(true)
  const { id } = useParams()

  const juegos = JUEGOS[id];

  useEffect(() => {

    const productDetailPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(juegos)
      }, 900);
    })
    productDetailPromise
      .then((data) => { setProductosDetalle(data) })
      .catch((err) => { toast.error(err) })
      .finally(() => { setLoading(false) })
  }, [id])

  if (Loading) {
    return <Loader />
  }
  else {
    return (
      <>
        <p>{Loading ? <Loader /> : ""}</p>
        <ItemDetail detalle={productosDetalle} />
      </>
    )
  }

}

export default ItemDetailContainer