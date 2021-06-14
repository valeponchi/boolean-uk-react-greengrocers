function Main({ cart, removeFromCart, addToCart , total }) {
  return(
    <main id="cart">
    <h2>Your Cart</h2>
    <div className="cart--item-list-container">
      <ul className="item-list cart--item-list">
      {cart.map(cartItem => (
        // <Item key={cartItem.id} cartItem={cartItem} />
        <li key={cartItem.id}>
          <img
            className="cart--cartItem-icon"
            src={`/assets/icons/${cartItem.id}.svg`}
            alt=""
          />
          <p>{cartItem.name}</p>
          <button className="quantity-btn remove-btn center"
            onClick={() => {removeFromCart(cartItem.id)}}              
          >-</button>
          <span className="quantity-text center">{cartItem.quantity}</span>
          <button className="quantity-btn add-btn center"
            onClick={() => {addToCart(cartItem.id)}}
          >+</button>
        </li>
      ))}           

      </ul>
    </div>
    <div className="total-section">
      <div>
        <h3>Total</h3>
      </div>
      <div>
        <span className="total-number">£{total.toFixed(2)}</span>
      </div>
    </div>
  </main>

  )
}

export default Main