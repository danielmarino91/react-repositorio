import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import ItemList from './ItemList'
import Loader from "./Loader"
import { useParams } from "react-router-dom"

function ItemListContainer() {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const respuestaParams = useParams()

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
        const productPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(juegos)
            }, 1500);
        })
        productPromise
            .then((data) => { setProductos(data) })
            .catch((err) => { toast.error(err) })
            .finally(() => { setLoading(false) })
    }, [respuestaParams])

    return (
        <>
            <p>{loading ? <Loader /> : ""}</p>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer