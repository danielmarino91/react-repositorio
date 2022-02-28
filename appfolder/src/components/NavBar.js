function NavBar()
{
    return (
        <nav className="navbar">
            <img src={process.env.PUBLIC_URL + "/assets/kyotogameslogo.png" } alt="Kyoto Games Logo"/>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Servicio técnico</a></li>
                <li><a href="#">Armá tu PC</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
    )
}

export default NavBar