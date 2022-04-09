import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import ItemDetail from './ItemDetail'
import Loader from "./Loader"
import { useParams } from "react-router-dom"
import { db } from "./Firebase"
import { getDocs, collection, query, where } from "firebase/firestore"

function ItemDetailContainer() {
  const [productosDetalle, setProductosDetalle] = useState([])
  const [Loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {

    const coleccionJuegos = collection(db, "games")
    const filtroJuego = query(coleccionJuegos, where("id", "==", Number(id)))
    const respuestaJuegos = getDocs(filtroJuego)

    respuestaJuegos
      .then((respuesta) => {
        const detalleJuego = respuesta.docs.map(doc => doc.data())
        setProductosDetalle(detalleJuego[0])
      })
      .catch((err) => toast.error(err))
      .finally(() => setLoading(false))
  }, [id])

  return (
    <>
      {Loading ? <Loader /> : <ItemDetail detalle={productosDetalle} />}
    </>
  )
}

export default ItemDetailContainer