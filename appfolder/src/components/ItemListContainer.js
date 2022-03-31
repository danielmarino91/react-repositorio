import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useParams } from "react-router-dom"
import ItemList from './ItemList'
import Loader from "./Loader"
import JUEGOS from "./db_juegos.json"
import { db } from "./Firebase"
import { getDocs, collection } from "firebase/firestore"



function ItemListContainer() {
    const [productos, setProductos] = useState([])
    const [Loading, setLoading] = useState(true)
    const { categoria: idCategoria } = useParams()

    const juegos = JUEGOS;

    useEffect(() => {

        /* const juegosCollection = collection(db, "games")
        const documentos = getDocs(juegosCollection)
        
        documentos
        .then( (res)=>{res.forEach((documento)=>{console.log(documento.data())})})
        .catch() */

        const productPromise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(juegos)
            }, 900);
        })
        productPromise
            .then((data) => {
                if (idCategoria) {
                    const juegosEncontrados = juegos.filter(data => data.categoria == idCategoria)
                    setProductos(juegosEncontrados)
                }
                else {
                    setProductos(data)
                }
            })
            .catch((err) => { toast.error(err) })
            .finally(() => { setLoading(false) })
    }, [idCategoria])

    return (
        <>
            <p>{Loading ? <Loader /> : ""}</p>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer