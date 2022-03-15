function ItemDetail(detalle) {
  return (
    <div className='itemStyle'>
      <h3>{detalle.nombre}</h3>
      <img src={detalle.imagen} alt="Producto"></img>
      <p className="itemStyle__price">{detalle.precio}$</p>
      <p className="itemStyle__detail">{detalle.info}</p>
    </div>
  )
}

export default ItemDetail