import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import ItemListContainer from "./components/ItemListContainer"

function App() {

    const usuario = ["Daniel", "Mariño", 30];

    return (
        <>
            <Header/>
            <Main nombre={usuario[0]} apellido={usuario[1]} edad={usuario[2]}/>
            <ItemListContainer producto="Producto 1"/>
            <Footer/>
        </>
    )
}

export default App