import ItemCount from "./ItemCount"
import { useState } from "react"
import { toast } from "react-toastify";
import { NavLink} from "react-router-dom"
import { useContext } from "react"
import { contexto } from "./CartContext"

function ItemDetail({ detalle }) {
  
  const [seleccionado, setseleccionado] = useState(false);
  const resultado = useContext(contexto)
  const addItem = resultado.addItem
  
  const onAdd = (unidadSeleccionada) => {
    
    if ((unidadSeleccionada != undefined) && (unidadSeleccionada > 1))
    {
      setseleccionado(unidadSeleccionada)
      toast.success(`Se agregaron ${unidadSeleccionada} copias de ${detalle.nombre} al carrito`)
    }
    else if (unidadSeleccionada === 1)
    {
      setseleccionado(unidadSeleccionada)
      toast.success(`Se agrego ${unidadSeleccionada} copia de ${detalle.nombre} al carrito`)
    }
  }

  {seleccionado? toast(`Se agrego un juego, ya se puede ir al carrito`) : toast.error(`Todavia no se agrego ningun juego`)}
  
  return (
    <div className="itemDetail">
      <img src={detalle.imagen}></img>
      <div className="itemDetail__detail">
        <p className="itemDetail__title">{detalle.nombre}</p>
        <p><span>Informacion:</span> {detalle.detalle}</p>
        <p><span>Categoria:</span> {detalle.categoria}</p>
        <p><span>Precio:</span> $ {detalle.precio}</p>
        <p><span>Stock disponible:</span> {detalle.stock}</p>
      </div>
      {seleccionado? null : <ItemCount title={detalle.nombre} initial={1} stock={detalle.stock} onAdd={onAdd} />}
      {seleccionado? <div className="goCart"><NavLink to="/carrito"><button onClick={addItem}>Agregar al carrito</button></NavLink></div> : null }
    </div>
  )
}

export default ItemDetail