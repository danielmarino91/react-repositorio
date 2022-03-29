import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react"
import { contexto } from "./CartContext"

function CartWidget() {

    const resultado = useContext(contexto)
    const itemCartNumber = resultado.quantity
    const totalPrice = resultado.total


    return (
        <>
        { itemCartNumber > 0 ? <div className="cartWidget"><div className="cartWidget__widget"><AiOutlineShoppingCart /><p>{itemCartNumber}</p></div><p>Total: {totalPrice}</p></div> : null}
        </>
    )
}

export default CartWidget