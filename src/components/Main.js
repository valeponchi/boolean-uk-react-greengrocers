import Cart from './Cart.js'

function Main({ total, shop, cart, removeFromCart, addToCart }) {
	return (
		<main id="cart">
			<h2>Your Cart</h2>
			<Cart
				shop={shop}
				cart={cart}
				removeFromCart={removeFromCart}
				addToCart={addToCart}
			/>
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
