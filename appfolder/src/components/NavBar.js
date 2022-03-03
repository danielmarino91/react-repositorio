import Links from "./Links"
import CartWidget from "./CartWidget"

function NavBar()
{
    return (
        <nav className="navbar">
            <img src={process.env.PUBLIC_URL + "/assets/kyotogameslogo.png" } alt="Kyoto Games Logo"/>
            <Links/>
            <CartWidget numero="4"/>
            
        </nav>
    )
}

export default NavBar