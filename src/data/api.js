export function getStore() {
	return fetch('http://localhost:4000/items').then(resp => resp.json())
}

export function getCart() {
	return fetch('http://localhost:4000/cart').then(resp => resp.json())
}

export function createCartItem(newCartItemId) {
	const cartData = { id: newCartItemId, quantity: 1 }
	return fetch('http://localhost:4000/cart', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(cartData),
	}).then(resp => resp.json())
}

export function updateCartItem(cartData) {
	return fetch(`http://localhost:4000/cart/${cartData.id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(cartData),
	}).then(resp => resp.json())
}

export function increaseCartItemQuantity(cartData) {
	const updateCartData = { ...cartData, quantity: cartData.quantity + 1 }
	return updateCartItem(updateCartData)
}

export function decreaseCartItemQuantity(cartData) {
	const updateCartData = { ...cartData, quantity: cartData.quantity - 1 }
	return updateCartItem(updateCartData)
}

export function deleteCartItem(cartDataId) {
	return fetch(`http://localhost:4000/cart/${cartDataId}`, {
		method: 'DELETE',
	})
}
