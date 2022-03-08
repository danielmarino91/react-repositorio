import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import ItemListContainer from "./components/ItemListContainer"
import ItemCount from "./components/ItemCount"

function App() {

    const usuario = ["Daniel", "Mariño", 30];
    const miOnAdd = () => {}

    return (
        <>
            <Header/>
            <Main nombre={usuario[0]} apellido={usuario[1]} edad={usuario[2]} onAdd={miOnAdd}/>
            <ItemListContainer producto="Producto 1"/>
            <ItemCount initial={1} stock={5}/>
            <Footer/>
        </>
    )
}

export default App