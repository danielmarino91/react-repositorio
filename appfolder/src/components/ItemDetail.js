import ItemCount from "./ItemCount"

const onAdd = ()=>
{
  console.log("On Add desde el ItemDetail");
}

function ItemDetail({ detalle }) {
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
      <ItemCount titulo={detalle.nombre} initial={1} stock={detalle.stock} onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail