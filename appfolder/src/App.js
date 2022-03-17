import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.min.css'

function App() {

    return (
        <BrowserRouter>
            <Header />
            <Main />
            <Footer />
            <ToastContainer />
        </BrowserRouter>
    )
}

export default App