import {useState} from "react"

function ItemCount(prop)
{
    const [contador, setContador] = useState(prop.initial);
    const stock = useState(prop.stock);

    const sumar = () =>
    {
        if (contador >= (prop.stock))
        {
            setContador(contador + 0)
        }
        else
        {
            setContador(contador + 1);
        }
    }
    
    const restar = () =>
    {
        if (contador <= 1)
        {
            setContador(contador + 0)
        }
        else
        {
            setContador(contador - 1);
        }
    }

    const agregarAlCarrito = () =>
    {
        console.log(`Se agregaron ${contador} unidades del producto`)
    }
    
    return(
        <>
            <div className="contador"> 
                <div className="contador__buttons">
                    <button onClick={restar}>-</button>
                    <p>{contador}</p>
                    <button onClick={sumar}>+</button>
                </div>
                <button onClick={agregarAlCarrito}>Agregar al carrito</button>
            </div>
        </>
        );
}

export default ItemCount