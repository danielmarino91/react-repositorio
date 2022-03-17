import { useState } from "react"
import { toast } from "react-toastify";

function ItemCount(prop) {
    const [contador, setContador] = useState(prop.initial);
    const stock = useState(prop.stock);

    const sumar = () => {
        if (contador >= (prop.stock)) {
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

    const agregarAlCarrito = () => {
        toast.success(`Se agrego ${prop.titulo} al carrito`);
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