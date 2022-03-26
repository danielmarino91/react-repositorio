import { useState } from "react"

function ItemCount({ title, initial, stock, onAdd  }) {
    const [Counter, setCounter] = useState(initial)

    const add = () => {
        if (Counter >= (stock)) {
            setCounter(Counter + 0)
        }
        else {
            setCounter(Counter + 1);
        }
    }

    const subtract = () => {
        if (Counter <= 1) {
            setCounter(Counter + 0)
        }
        else {
            setCounter(Counter - 1);
        }
    }

    const addToCart = () => {
            {onAdd(Counter)}
    }

    return (
            <div className="counter">
                <div className="counter__buttons">
                    <button onClick={subtract}>-</button>
                    <p>{Counter}</p>
                    <button onClick={add}>+</button>
                </div>
                    <button onClick={addToCart}>Añadir {Counter} {title}</button>
            </div>
    );
}

export default ItemCount