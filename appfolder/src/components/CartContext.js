import { React, createContext, useState } from "react"
export const contexto = createContext()
const { Provider } = contexto

const CartContext = ({ children }) => {

    const [Cart, setCart] = useState([])
    const [Total, setTotal] = useState(0)

    const addItem = (id, item, precio, imagen, stock) => {
        const nuevoProducto = Cart.push({ id: id, nombre: item, precio: precio, imagen: imagen, stock: stock })
        setTotal(Cart.length)

    }

    const removeItem = (id) => {
        const items = Cart.filter((i) => i.id !== id);
        setCart(items);
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