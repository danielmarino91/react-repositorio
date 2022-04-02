import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import ItemDetail from './ItemDetail'
import Loader from "./Loader"
import { useParams } from "react-router-dom"
import { db } from "./Firebase"
import { getDocs, collection } from "firebase/firestore"
// import JUEGOS from "./db_juegos.json"

function ItemDetailContainer() {
  const [productosDetalle, setProductosDetalle] = useState([])
  const [Loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    const juegosCollection = collection(db, "games")
    const documentos = getDocs(juegosCollection)

    documentos
      .then((respuesta) => {
        const listaJuegos = respuesta.docs.map(doc => doc.data())
        const juegoElegido = listaJuegos.filter(data => data.id == id)
        setProductosDetalle(juegoElegido[0])
      })
      .catch((err) => toast.error(err))
      .finally(() => setLoading(false))
  }, [id])

  // const juegos = JUEGOS[id];

  // useEffect(() => {
  //   const productDetailPromise = new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(juegos)
  //     }, 0);
  //   })
  //   productDetailPromise
  //     .then((data) => { setProductosDetalle(data) })
  //     .catch((err) => { toast.error(err) })
  //     .finally(() => { setLoading(false) })
  // }, [id])

  return (
    <>
      {Loading ? <Loader /> : <ItemDetail detalle={productosDetalle} />}
    </>
  )
}

export default ItemDetailContainer