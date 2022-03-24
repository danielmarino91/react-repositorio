import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react"
import { contexto } from "./CartContext"

function CartWidget(number) {

    const resultado = useContext(contexto)
    const itemCartNumber = resultado.total

    return (
        <div className="cartWidget"><AiOutlineShoppingCart /><p>{itemCartNumber}</p></div>
    )
}

export default CartWidget