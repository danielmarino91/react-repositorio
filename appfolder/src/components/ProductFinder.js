import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useParams } from "react-router-dom"
import { db } from "./Firebase"
import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const ProductFinder = () => {

    const [productos, setProductos] = useState([])
    const [Loading, setLoading] = useState(true)
    //const [] = useParams()

    useEffect(() => {
            const coleccionJuegos = collection(db, "games")
            const respuestaJuegos = getDocs(coleccionJuegos)

            respuestaJuegos
                .then(setLoading(true))
                .then((res) => { setProductos(res.docs.map(doc => doc.data())) })
                .catch((err) => toast.error(err))
                .finally(() => setLoading(false))
    }, [])
    
    const searchGame = () => {
        const gameFinded = document.getElementById("gameFinded").value
        console.log(gameFinded)
        document.getElementById("gameFinded").value = ""
    }
    
    //juegoElegido.indexOf(juegoBuscado) > -1
    return (
        <div className="productFinder">
            <input id="gameFinded" placeholder='Que estas buscando?'></input><button onClick={searchGame}><AiOutlineSearch /></button>
        </div>
    )
}

export default ProductFinder