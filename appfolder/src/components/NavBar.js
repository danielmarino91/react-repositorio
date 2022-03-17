import Links from "./Links"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/"><img src={"/assets/kyotogameslogo.png"} alt="Kyoto Games Logo" /></Link>
            <Links />
            <CartWidget numero="0" />
        </nav>
    )
}

export default NavBar