import { NavLink } from "react-router-dom"

function Links() {
    return (
            <ul className="links">
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/categoria/1">Categoria 1</NavLink>
                <NavLink to="/categoria/2">Categoria 2</NavLink>
                <NavLink to="/categoria/3">Categoria 3</NavLink>
                <NavLink to="/carrito">Carrito</NavLink>
            </ul >
    )
}

export default Links