import { React, createContext, useState } from "react"
export const contexto = createContext()
const { Provider } = contexto

const CartContext = ({ children }) => {

    const [Cart, setCart] = useState([])
    const [Total, setTotal] = useState(0)

    const addItem = (id, item, precio, imagen, stock) => {
        const nuevoProducto = Cart.push({ id: id, nombre: item, precio: precio, imagen: imagen, stock: stock })
        console.log(nuevoProducto, Cart)
    }

    const removeItem = (id) => {

    }

    const emptyCart = () => {
        setCart([])
    }

    const isInCart = (id) => {

    }

    const contextValue = {
        cart: Cart,
        total: Total,
        addItem: addItem,
        removeItem: removeItem,
        emptyCart: emptyCart
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