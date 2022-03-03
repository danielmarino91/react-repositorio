import Button from "./Button"
import CartWidget from "./CartWidget"
import ItemListContainer from "./ItemListContainer"

function Main(props)
{
    return (
        <main>
            {/* <p>Aca iria el contenido...SI TUVIERA UNO!</p>
            <img src={process.env.PUBLIC_URL + "/assets/papadetimmy.jpg" } alt="papá de timmy"/> */}
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