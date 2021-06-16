function CartItem({ cartItem, removeFromCart, addToCart, shopItem }) {
	if (shopItem === undefined) return <li>Item not found in store...</li>

	return (
		<li className="" key={cartItem.id}>
			<img
				className="cart--cartItem-icon"
				src={`/assets/icons/${cartItem.id}.svg`}
				alt=""
			/>
			<p>{shopItem.name}</p>
			<button
				className="quantity-btn remove-btn center"
				onClick={() => {
					removeFromCart(cartItem.id)
				}}
			>
				-
			</button>
			<span className="quantity-text center">{cartItem.quantity}</span>
			<button
				className="quantity-btn add-btn center"
				onClick={() => {
					addToCart(cartItem.id)
				}}
			>
				+
			</button>
		</li>
	)
}

export default CartItem
