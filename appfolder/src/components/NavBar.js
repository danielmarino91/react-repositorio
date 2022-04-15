import Links from "./Links"
import CartWidget from "./CartWidget"
import { Link, NavLink } from "react-router-dom"
//import ProductFinder from "./ProductFinder"

function NavBar() {

    return (
        <nav className="navbar">
            <Link to="/"><img src={"/assets/kyotogameslogosvg.svg"} alt="Kyoto Games" /></Link>
            {/* <ProductFinder /> */}
            <Links/>
            <NavLink to="/carrito"><CartWidget numero="0" /></NavLink>
        </nav>
    )
}

export default NavBar