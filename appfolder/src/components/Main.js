import {useState} from "react"
import Button from "./Button"

function Main(props)
{
    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState([]);

    
    return (
        <main>
            <h2>Hola, soy {props.nombre} {props.apellido} y tengo {props.edad} años!</h2>
            <div className="buttonContainer">
                <Button texto="Boton 1"/>
                <Button texto="Boton 2"/>
                <Button texto="Boton 3"/>
            </div>
        </main>
    )
}

export default Main