import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react"
import { contexto } from "./CartContext"

function CartWidget() {

    const resultado = useContext(contexto)
    const itemCartNumber = resultado.quantity
    const totalPrice = resultado.total;

    return (
        <>
        { itemCartNumber > 0 ? <div className="cartWidget"><AiOutlineShoppingCart /><p>{itemCartNumber} - ${totalPrice}</p></div> : null }
        </>
    )
}

export default CartWidget