import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"
import { ImCross } from "react-icons/im"
import CartWidget from "./CartWidget"
import Categories from "./Categories"
import ProductFinder from "./ProductFinder"

function NavBar() {

    const [CategorieVisible, setCategorieVisible] = useState(false)

    const change = () => {
        setCategorieVisible(!CategorieVisible)

        if (CategorieVisible !== true) {
            document.getElementsByClassName("navbar")[0].style.border = "none";
        }
        else if (CategorieVisible == true) {
            document.getElementsByClassName("navbar")[0].style.borderBottom = "1px solid #f34213";
        }
    }

    return (
        <>
            <nav className="navbar">
                <Link to="/"><img src={"/assets/kyotogameslogosvg.svg"} alt="Kyoto Games" /></Link>
                <button className="navbar__btnToggle" onClick={change}> {CategorieVisible == true ? <ImCross /> : <GiHamburgerMenu />} </button>
                <ProductFinder />
                <NavLink to="/carrito"><CartWidget numero="0" /></NavLink>
            </nav>
            {CategorieVisible == true ? <Categories /> : null}
        </>
    )
}

export default NavBar