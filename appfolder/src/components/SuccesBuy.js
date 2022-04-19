import React from 'react'
import { GoCheck } from "react-icons/go"
import { NavLink } from "react-router-dom"

const SuccesBuy = ({ name, phone, email }) => {
    return (
        <>
            <div className="succesBuy">
                <div>
                    <GoCheck />
                </div>
                <div className="succesBuy__rightSide">
                    <div className="succesBuy__rightSide--message">
                        <p>Felicidades <span>{name}</span>, su compra se realizo con exito!</p>
                    </div>
                    <div className="succesBuy__rightSide--details">
                        <h3>Detalles de la compra</h3>
                        <p>Nombre: {name}</p>
                        <p>Telefono: {phone}</p>
                        <p>Email: {email}</p>
                    </div>
                    <div className="succesBuy__rightSide--button">
                        <NavLink to="/"><button className="btnGoIndex">Ver mas productos</button></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SuccesBuy

