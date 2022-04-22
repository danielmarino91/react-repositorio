import { AiOutlineShoppingCart } from "react-icons/ai"
import { BsCartX } from "react-icons/bs"
import { useContext } from "react"
import { contexto } from "./CartContext"

function CartWidget() {

    const resultado = useContext(contexto)
    const { quantity, total, currency } = resultado

    return (
        <>
            <div className="cartWidget">
                {quantity > 0 ? <><AiOutlineShoppingCart /><p>{quantity} - {currency.format(total)}</p></> : <BsCartX/>}
            </div>
        </>
    )
}

export default CartWidget