import { useState } from "react"

function ItemCount({ title, initial, stock, onAdd  }) {
    const [contador, setContador] = useState(initial);

    const sumar = () => {
        if (contador >= (stock)) {
            setContador(contador + 0)
        }
        else {
            setContador(contador + 1);
        }
    }

    const restar = () => {
        if (contador <= 1) {
            setContador(contador + 0)
        }
        else {
            setContador(contador - 1);
        }
    }

    const confirmarCompra = () => {
        {onAdd(contador)}
    }

    return (
            <div className="contador">
                <div className="contador__buttons">
                    <button onClick={restar}>-</button>
                    <p>{contador}</p>
                    <button onClick={sumar}>+</button>
                </div>
                    <button onClick={confirmarCompra}>Añadir {contador} {title}</button>
            </div>
    );
}

export default ItemCount