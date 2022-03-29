import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react"
import { contexto } from "./CartContext"

function CartWidget() {

    const resultado = useContext(contexto)
    const newItemCartNumber = resultado.quantity

    return (
        <>
        { newItemCartNumber > 0 ? <div className="cartWidget"><AiOutlineShoppingCart /><p>{newItemCartNumber}</p></div> : null}
        </>
    )
}

export default CartWidget