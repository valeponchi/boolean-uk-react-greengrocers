const rootURL = 'http://localhost:4000'
const storeURL = `${rootURL}/items`
const cartURL = `${rootURL}/cart`

export function getStore() {
	return fetch(storeURL).then(resp => resp.json())
}

export function getCart() {
	return fetch(cartURL).then(resp => resp.json())
}

export function createCartItem(newCartItemId) {
	const cartData = { id: newCartItemId, quantity: 1 }
	return fetch(cartURL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(cartData),
	}).then(resp => resp.json())
}

export function updateCartItem(cartData) {
	return fetch(`${cartURL}/${cartData.id}`, {
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
	return fetch(`${cartURL}/${cartDataId}`, {
		method: 'DELETE',
	})
}
