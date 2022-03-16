function ItemDetail ({productos}) {
  return (
    <div className='itemStyle'>
      <h3>{productos.nombre}</h3>
      <img src={productos.imagen} alt="Producto"></img>
      <p className="itemStyle__price">{productos.precio}$</p>
      <p className="itemStyle__detail">{productos.info}</p>
    </div>
  )
}

export default ItemDetail