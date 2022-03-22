import { useState } from "react"

function ItemCount(prop) {
    const [contador, setContador] = useState(prop.initial);

    const sumar = (e) => {
        if (contador >= (prop.stock)) {
            setContador(contador + 0)
        }
        else {
            setContador(contador + 1);
        }
    }

    const restar = (e) => {
        if (contador <= 1) {
            setContador(contador + 0)
        }
        else {
            setContador(contador - 1);
        }
    }

    const agregarAlCarrito = (e) => {
        {prop.onAdd(contador)}
    }

    return (
        <>
            <div className="contador">
                <div className="contador__buttons">
                    <button onClick={restar}>-</button>
                    <p>{contador}</p>
                    <button onClick={sumar}>+</button>
                </div>
                <div className="contador__otherButtons">
                    <button onClick={agregarAlCarrito}>Agregar al carrito</button>
                </div>
            </div>
        </>
    );
}

export default ItemCount