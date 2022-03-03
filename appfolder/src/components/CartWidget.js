import { AiOutlineShoppingCart } from "react-icons/ai";

function CartWidget(number)
{
    return(
        <div className="cartWidget"><AiOutlineShoppingCart/><p>{number.numero}</p></div>
    )
}

export default CartWidget