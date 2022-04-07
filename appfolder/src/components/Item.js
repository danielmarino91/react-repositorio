import { Link } from "react-router-dom"
import { AiOutlineShoppingCart } from "react-icons/ai";

function Item({ producto }) {

    return (
        <Link to={`/item/${producto.id}`}>
            <div className='itemListStyle__item '>
                <img src={producto.imagen}></img>
                <h3 className="itemListStyle__item--title">{producto.nombre}</h3>
                <div className="itemListStyle__item--price">${producto.precio}</div>
                <div className="itemListStyle__item--btnBuy"><AiOutlineShoppingCart />Comprar</div>
            </div>
        </Link>
    )
}

export default Item