import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react"
import { contexto } from "./CartContext"

function CartWidget() {

    const resultado = useContext(contexto)
    const itemCartNumber = resultado.quantity
    const totalPrice = resultado.total;

    return (
        <>
            <div className="cartWidget">
                <AiOutlineShoppingCart />{itemCartNumber > 0 ? <p>{itemCartNumber} - ${totalPrice}</p> : <p>Carrito</p>}
            </div>
        </>
    )
}

export default CartWidget