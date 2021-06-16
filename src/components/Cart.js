import CartItem from './CartItem.js'

function Cart({ shop, cart, removeFromCart, addToCart }) {
	return (
		<div className="cart--item-list-container">
			<ul className="item-list cart--item-list">
				{cart.map(cartItem => {
					const shopItem = shop.find(shopItem => shopItem.id === cartItem.id)
					return (
						<CartItem
							key={cartItem.id}
							cartItem={cartItem}
							removeFromCart={removeFromCart}
							addToCart={addToCart}
							shopItem={shopItem}
						/>
					)
				})}
			</ul>
		</div>
	)
}

export default Cart
