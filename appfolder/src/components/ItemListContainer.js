import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'

const productos = [
    {
        id: "1",
        nombre: "Crash Bandicoot 4: It's About Time",
        imagen: "assets/producto0.png",
        detalle: "Juego de aventura y plataformas",
        precio: 9000,
        stock: 13,
    },
    {
        id: "2",
        nombre: "Cyberpunk 2077",
        imagen: "assets/producto1.png",
        detalle: "Juego de rol y aventura",
        precio: 6000,
        stock: 15,
    },
    {
        id: "3",
        nombre: "DeathLoop",
        imagen: "assets/producto2.png",
        detalle: "Juego de accion en primera persona",
        precio: 10000,
        stock: 21,
    }
]

const productPromise = new Promise((res) => {
    setTimeout(() => {
        res(productos)
    }, 2000);
})

function ItemListContainer() {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        productPromise
            .then((data) => setProductos(data))
            .catch((err) => console.log(err))
    })

    return (
        <>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer