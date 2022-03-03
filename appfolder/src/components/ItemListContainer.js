function ItemListContainer(greeting)
{
    return (
        <ul className="itemList">
                <li><a href="#">{greeting.producto}</a></li>
            </ul>
    )
}

export default ItemListContainer