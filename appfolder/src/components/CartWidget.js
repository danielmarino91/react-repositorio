import { AiOutlineShoppingCart } from "react-icons/ai"
import { BsCartX } from "react-icons/bs"
import { useContext } from "react"
import { contexto } from "./CartContext"

function CartWidget() {

    const resultado = useContext(contexto)
    const itemCartNumber = resultado.quantity
    const totalPrice = resultado.total;

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    })

    const price = formatter.format(`${totalPrice}`)

    return (
        <>
            <div className="cartWidget">
                {itemCartNumber > 0 ? <><AiOutlineShoppingCart /><p>{itemCartNumber} - {price}</p></> : <BsCartX/>}
            </div>
        </>
    )
}

export default CartWidget