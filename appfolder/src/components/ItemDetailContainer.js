function ItemDetailContainer() {
  const productosDetalle =
  {
    id: "1",
    nombre: "Crash Bandicoot 4: It's About Time",
    imagen: "assets/producto0.png",
    detalle: "Juego de aventura y plataformas",
    precio: 9000,
    stock: 13,
  }

  const productDetailPromise = new Promise((res) => {
    setTimeout(() => {
      res(productosDetalle)
    }, 2000);
  })

  function ItemDetailContainer() {
    const [productos, setProductos] = useState([])

    useEffect(() => {
      productDetailPromise
        .then((data) => setProductos(data))
        .catch((err) => console.log(err))
    })

    return (
      <>
        <ItemList productos={productos} />
      </>
    )
  }
}

export default ItemDetailContainer