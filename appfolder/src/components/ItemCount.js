import { useContext, useState, useEffect } from "react"
import { toast } from "react-toastify"
import { contexto } from "./CartContext"

function ItemCount({ id, initial, stock, onAdd }) {
    const [Counter, setCounter] = useState(initial)
    const [StockInCart, setStockInCart] = useState()

    const resultado = useContext(contexto)
    const cart = resultado.cart

    useEffect(() => {
        const itemFindedInCart = cart.find(e => e.id === id);

        if (itemFindedInCart !== undefined) {
            const newStockInCart = itemFindedInCart.stock
            setStockInCart(newStockInCart)
        }
        else {
            setStockInCart(0)
        }
    }, [StockInCart])


    const add = () => {
        if (Counter >= (stock)) {
            setCounter(Counter + 0)
        }
        else {
            setCounter(Counter + 1);
        }
    }

    const subtract = () => {
        if (Counter <= 1) {
            setCounter(Counter + 0)
        }
        else {
            setCounter(Counter - 1);
        }
    }

    const addToCart = () => {
        if (stock < StockInCart + Counter) { toast.error(`Ya hay ${StockInCart} copias en el carrito, solo puede llevar ${stock - StockInCart} mas`) }
        else {
            onAdd(Counter)
        }
    }

    return (
        <div className="counter">
            <span>Stock disponible: {stock}</span>
            <div className="counter__buttons">
                <button onClick={subtract}>-</button>
                <p>{Counter}</p>
                <button onClick={add}>+</button>
            </div>
            <button onClick={addToCart}>Añadir producto</button>
        </div>
    );
}

export default ItemCount