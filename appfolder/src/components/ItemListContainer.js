import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import ItemList from './ItemList'
import Loader from "./Loader"
import { useParams } from "react-router-dom"

function ItemListContainer() {
    console.log("Se ejecuto la funcion")
    const [productos, setProductos] = useState([])
    const [Loading, setLoading] = useState(true)
    const {id} = useParams()

    const juegos = [
        {
            id: "1",
            nombre: "Crash Bandicoot 4: It's About Time",
            imagen: "assets/producto0.png",
            detalle: "Juego de aventura y plataformas",
            precio: 9000,
            categoria: "cat1",
            stock: 13,
        },
        {
            id: "2",
            nombre: "Cyberpunk 2077",
            imagen: "assets/producto1.png",
            detalle: "Juego de rol y aventura",
            precio: 6000,
            categoria: "cat2",
            stock: 15,
        },
        {
            id: "3",
            nombre: "DeathLoop",
            imagen: "assets/producto2.png",
            detalle: "Juego de accion en primera persona",
            precio: 10000,
            categoria: "cat3",
            stock: 21,
        }
    ]

    useEffect(() => {
        console.log("Se ejecuto useEffect")
        const productPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(juegos)
            }, 1500);
        })
        productPromise
            //.then((data) => {setProductos(data)})
            .then((data) => {
                if (id)
                {
                    const juegosEncontrados = juegos.filter(data => data.id == id)
                    console.log(juegosEncontrados)
                    setProductos(juegosEncontrados)
                }
                else
                {
                    setProductos(data)
                }
            })
            .catch((err) => { toast.error(err) })
            .finally(() => { setLoading(false) })
    }, [id])

    return (
        <>
            <p>{Loading ? <Loader /> : ""}</p>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer