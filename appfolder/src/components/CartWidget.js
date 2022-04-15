import { AiOutlineShoppingCart } from "react-icons/ai"
import { BsCartX } from "react-icons/bs"
import { useContext } from "react"
import { contexto } from "./CartContext"

function CartWidget() {

    const resultado = useContext(contexto)
    const itemCartNumber = resultado.quantity
    const totalPrice = resultado.total;

    return (
        <>
            <div className="cartWidget">
                {itemCartNumber > 0 ? <><AiOutlineShoppingCart /><p>{itemCartNumber} - ${totalPrice}</p></> : <BsCartX/>}
            </div>
        </>
    )
}

export default CartWidget