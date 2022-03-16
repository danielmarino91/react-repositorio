function ItemDetail({ detalle }) {
  return (
    <div className="itemDetail">
      <img src={detalle.imagen}></img>
      <div className="itemDetail__detail">
        <h3><span>Titulo:</span> {detalle.nombre}</h3>
        <p className="itemStyle__price"><span>Precio:</span> {detalle.precio}$</p>
        <p className="itemStyle__detail"><span>Información:</span> {detalle.info}</p>
      </div>
    </div>
  )
}

export default ItemDetail