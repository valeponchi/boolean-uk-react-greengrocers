function Header({ shop, addToCart }) {
  return(
    <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
        {shop.map(item => (
            // <Item key={item.id} item={item} />
          <li key={item.id}>
            <div className="store--item-icon">
              <img 
                src={`/assets/icons/${item.id}.svg`} 
                alt={item.name} 
              />
            </div>
            <button
              onClick={() => {addToCart(item.id)}}
            >Add to cart
            </button>
          </li>
        ))}           
        </ul>
      </header>
  )
}

export default Header