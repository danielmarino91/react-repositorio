import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react"
import { contexto } from "./CartContext"

function CartWidget() {

    const resultado = useContext(contexto)
    const itemCartNumber = resultado.cart.length
    const newItemCartNumber = resultado.quantity

    return (
        <div className="cartWidget"><AiOutlineShoppingCart /><p>{newItemCartNumber}</p></div>
    )
}

export default CartWidget