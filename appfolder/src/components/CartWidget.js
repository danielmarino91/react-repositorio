import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react"
import { contexto } from "./CartContext"

function CartWidget() {

    const resultado = useContext(contexto)
    const itemCartNumber = resultado.cart.length

    return (
        <div className="cartWidget"><AiOutlineShoppingCart /><p>{itemCartNumber}</p></div>
    )
}

export default CartWidget