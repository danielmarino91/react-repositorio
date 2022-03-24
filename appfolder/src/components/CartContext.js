import React from 'react'
import { createContext, useState } from "react"
export const contexto = createContext()
const { Provider } = contexto

const CartContext = ({ children }) => {

    const [cart, setCart] = useState([])
    const [total, setTotal] = useState (0)

    const addItem = (product, quantity)=> {
        
        // if (isInCart())
        // {
        //     cart.find()
        // }
        // else
        // {
            cart.push("product")
        //     setTotal(total + product.precio)
        // }
    }
    
    const removeItem = ()=> {
        console.log("Funciono removeItem")

    }
    
    const clear = ()=> {
        console.log("Funciono el clear")
        setCart([])
    }

    const isInCart = ()=> {
        
        //recorre carrito en busca de id
        //devuelve true si el producto existe
        //si lo encuentra devuelve true, sino false 
    }

    const contextValue = {
        cart : cart,
        total: total,
        addItem: addItem,
        removeItem: removeItem,
        clear: clear
    }

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default CartContext

// carrito: [{
//     "id": "0",
//     "nombre": "Crash Bandicoot 4: It's About Time",
//     "link": "crashbandicoot4itsabouttime",
//     "imagen": "/assets/producto0.png",
//     "detalle": "Crash está de regreso en esta cuarta entrega en un nuevo enfrentamiento contra el siniestro Dr. Neo Cortex. Ahora la batalla se dará en una persecución desafiando tiempo y espacio con objetos como las máscaras cuánticas que son capaces de alterar la realidad",
//     "precio": 9000,
//     "categoria": "Plataformas",
//     "stock": 10
// },
// {
//     "id": "1",
//     "nombre": "Cyberpunk 2077",
//     "link": "cyberpunk2077",
//     "imagen": "/assets/producto1.png",
//     "detalle": "Los creadores de The Witcher y The Witcher 2: Assassins of Kings anuncian este proyecto que te trasladará a la ciudad de Night City en el futuro año 2077. Allí verás una humanidad bastante degradada que utiliza la tecnología intensivamente, de tal manera que nuestra esencia se ha perdido",
//     "precio": 6000,
//     "categoria": "Rol",
//     "stock": 10
// },
// {
//     "id": "2",
//     "nombre": "DeathLoop",
//     "link": "deathLoop",
//     "imagen": "/assets/producto2.png",
//     "detalle": " Este título de aventura y disparos en primera persona te transporta a la isla donde en un ciclo interminable dos asesinos se enfrentan eternamente. ¿Podrás acabar con todos lo objetivos?",
//     "precio": 10000,
//     "categoria": "Shooter",
//     "stock": 10
// }],
// total: 0