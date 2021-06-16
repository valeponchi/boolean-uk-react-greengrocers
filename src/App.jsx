//IMPORTS:
import { useEffect, useState } from 'react'
import Footer from './components/Footer.js'
import Header from './components/Header.js'
import Main from './components/Main.js'
import {
	createCartItem,
	decreaseCartItemQuantity,
	deleteCartItem,
	getCart,
	getStore,
	increaseCartItemQuantity,
} from './data/api.js'

// import initialItems from './data/items.js' // NOW THEY COME FROM SERVER

import './styles/index.css'

function App() {
	const [shop, setShop] = useState([])
	const [cart, setCart] = useState([])

	//GET SHOP and CART FROM SERVER
	useEffect(() => {
		getStore()
			//initialItemsFromServer => setShop(initialItemsFromServer) SAME of:
			.then(setShop)
			.then(getCart().then(setCart))
	}, [])

	let total = 0
	for (const cartItem of cart) {
		const shopItem = shop.find(shopItem => shopItem.id === cartItem.id)
		if (shopItem) {
			total += cartItem.quantity * shopItem.price
		}
	}

	function addToCart(itemId) {
		const foundItem = cart.find(cartItem => cartItem.id === itemId)

		//IF ITEM IS IN THE CART:
		if (foundItem !== undefined) {
			increaseCartItemQuantity(foundItem).then(updatedCartItemFromServer => {
				const updatedCart = cart.map(cartItem =>
					cartItem.id === itemId
						? updatedCartItemFromServer //this is with the +1
						: cartItem
				)
				setCart(updatedCart)
			})
		} else {
			createCartItem(itemId).then(newItemFromServer => {
				setCart([...cart, newItemFromServer])
			})
		}
	}

	function removeFromCart(itemId) {
		const foundItem = cart.find(cartItem => cartItem.id === itemId)

		if (foundItem.quantity === 1) {
			deleteCartItem(itemId).then(resp => {
				if (resp.ok) {
					const updatedCart = cart.filter(cartItem => cartItem.id !== itemId)
					setCart(updatedCart)
				} else {
					alert('Failed to delete..') //you wouldn't alert in a real App
				}
			})

			//if there is more than 1 item in the cart:
		} else {
			decreaseCartItemQuantity(foundItem).then(updatedCartItemFromServer => {
				const updatedCart = cart.map(cartItem =>
					cartItem.id === itemId
						? updatedCartItemFromServer //this is with the -1
						: cartItem
				)
				setCart(updatedCart)
			})
		}
	}

	return (
		<div className="App">
			<Header addToCart={addToCart} shop={shop} />

			<Main
				shop={shop}
				cart={cart}
				removeFromCart={removeFromCart}
				addToCart={addToCart}
				total={total}
			/>

			<Footer />
		</div>
	)
}

export default App

//QUESTION:
// 1)why it adds items in the db.json but when I refresh the pg
//   it doesn't display them in the cart?
