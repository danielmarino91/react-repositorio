import ItemListContainer from "../components/ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import { Routes, Route} from "react-router-dom"

function Main()
{
    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
            </Routes>
            <ItemDetailContainer/>
            
        </main>
    )
}

export default Main