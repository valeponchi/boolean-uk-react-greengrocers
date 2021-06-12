import { useState } from 'react'

import initialItems from './data/items.js'

import "./styles/index.css";


function App() {
  const [items, setItems] = useState(initialItems)
  const [cartItems, setCartItems] = useState([])
  // cartItems: [
  //   {
  //     id: "005-avocado",
  //     quantity: 10
  //   },
  //   {
  //     id: "001-beetroot",
  //     quantity: 1
  //   }
  // ]

  const addQuantityIntoCart = itemToAdd => {
    const updatedCartItems = cartItems =>
      cartItems.map(cartItem => {
        const newItemToAdd = {
          id: itemToAdd.id,
          quantity: 1
        }

        itemToAdd.id === cartItem.id  
        ? {...cartItem, quantity: cartItem.quantity++}
        : {...cartItem, newItemToAdd}
      }
        
      )
    setCartItems(updatedCartItems)
    // for (const cartItem of cartItems) {

  } 
  


 //function minusQuantityIntoCart

 //function removeItemFromCard

 //function displayItemCart

 //function updateTotal





  return (
    <div className="App">
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
        {items.map(item => (
            // <Item key={item.id} item={item} />
          <li key={item.id}>
            <div className="store--item-icon">
              <img 
                src={`/assets/icons/${item.id}.svg`} 
                alt={item.name} 
              />
            </div>
            <button
              onClick={() => {addQuantityIntoCart(item)}}
            >Add to cart
            </button>
          </li>
        ))}           
        </ul>
      </header>

      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
          {items.map(item => (
            // <Item key={item.id} item={item} />
            <li key={item.id}>
              <img
                className="cart--item-icon"
                src={`/assets/icons/${item.id}.svg`}
                alt=""
              />
              <p>beetroot</p>
              <button className="quantity-btn remove-btn center">-</button>
              <span className="quantity-text center">1</span>
              <button className="quantity-btn add-btn center">+</button>
            </li>
          ))}           

          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£0.00</span>
          </div>
        </div>
      </main>

      <div>
        Icons made by
        <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26"
          >Icongeek26</a
        >
        from
        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </div>
    </div>
  )
}

export default App