import React, { useEffect, useState } from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

const productos = [
    {
        id: "1",
        nombre: "Crash Bandicoot 4: It's About Time",
        precio: 9000,
        stock: 10,
    },
    {
        id: "2",
        nombre: "Cyberpunk 2077",
        precio: 6000,
        stock: 10,
    },
    {
        id: "3",
        nombre: "DeathLoop",
        precio: 10000,
        stock: 10,
    }
]

const productPromise = new Promise((res)=>{
    setTimeout(() => {
    res(productos)
    }, 2000);
})

function ItemListContainer(props)
{
    const [productos, setProductos] = useState([])

    useEffect(()=>{
    productPromise
    .then((data)=> setProductos(data))
    .catch((err)=> console.log(err))
    })

    return (
    <>
        <div className='saludo'>{props.greeting}</div>
        <ItemCount initial={1} stock={5}/>
        <ItemList productos={productos}/>
    </>
    )
}

export default ItemListContainer