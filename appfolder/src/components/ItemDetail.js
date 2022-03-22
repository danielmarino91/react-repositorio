import ItemCount from "./ItemCount"
import { useState } from "react"
import { toast } from "react-toastify";

function ItemDetail({ detalle }) {
  
  const [seleccionado, setseleccionado] = useState(false);
  
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

  {seleccionado? toast(`Se agrego un juego`) : toast.error(`Todavia no se agrego ningun juego`)}
  
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
      <ItemCount titulo={detalle.nombre} initial={1} stock={detalle.stock} onAdd={onAdd} />
    </div>
  )
}

export default ItemDetail