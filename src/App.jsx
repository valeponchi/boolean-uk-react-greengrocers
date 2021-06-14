import { useState } from "react"
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";

import initialItems from './data/items.js'

import "./styles/index.css";


function App() {
  const [shop, setShop] = useState(initialItems)
  const [cart, setCart] = useState([])

  let total = 0
  for (const cartItem of cart) {
    const shopItem = shop.find( shopItem => shopItem.id === cartItem.id )
    total += cartItem.quantity * shopItem.price
  }

  function addToCart(itemId) {
    const foundItem = cart.find(cartItem => cartItem.id === itemId)
    
    if (foundItem !== undefined) {
      const updatedCart = cart.map(cartItem =>
        cartItem.id === itemId 
        ? {...cartItem, quantity: cartItem.quantity +1}
        : cartItem
      )
      setCart(updatedCart)

    } else {
      const newCartItem = {
        id: itemId,
        quantity: 1
      }
      setCart([...cart, newCartItem])
    }
  }
  
  function removeFromCart(itemId) {
    const foundItem = cart.find(cartItem => cartItem.id === itemId)

    if (foundItem.quantity === 1) {
      const updatedCart = cart.filter(cartItem => cartItem.id !== itemId) 
      setCart(updatedCart)

    } else {
      const updatedCart = cart.map(cartItem =>
        cartItem.id === itemId 
        ? {...cartItem, quantity: cartItem.quantity -1}
        : cartItem
      )
       setCart(updatedCart)
    }
  }


  return (
    <div className="App">
      <Header 
        addToCart={addToCart}
        shop={shop}
      />

     <Main 
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

