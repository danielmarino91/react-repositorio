import { Link } from "react-router-dom"
import { AiOutlineShoppingCart } from "react-icons/ai";

function Item({ producto }) {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    })

    const price = formatter.format(`${producto.precio}`)

    return (
        <Link to={`/item/${producto.id}`}>
            <div className='itemListStyle__item '>
                <img src={producto.imagen}></img>
                <h3 className="itemListStyle__item--title">{producto.nombre}</h3>
                <div className="itemListStyle__item--price">{price}</div>
                <div className="itemListStyle__item--btnBuy"><AiOutlineShoppingCart />Comprar</div>
            </div>
        </Link>
    )
}

export default Item