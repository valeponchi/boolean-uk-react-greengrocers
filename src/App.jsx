import { useState } from 'react'

import initialItems from './data/items.js'

import "./styles/index.css";


function App() {
  const [itemsInShop, setItemsInShop] = useState(initialItems)
  const [cart, setCart] = useState([])
   
  function addQuantityIntoCart(itemToAdd) {
    // console.log(`Add Item clicked!`)
    const newItem = { 
      id: itemToAdd.id, 
      name:itemToAdd.name, 
      quantity: 1
    }

    const updateCart = () => {
      let newCart = []
      
      //IF CART IS EMPTY:
      if (cart.length === 0) {
        newCart = [...cart, newItem]
       
        //IF CART IS NOT EMPTY:
      } else {
        //CHECK EACH ITEM IN THE CART
        cart.map(item => {
          //IF THE ID MATCHED ONE ALREADY IN THE CART,
          if (item.id === newItem.id) {
            let itemClicked = cart.find(itemToFind => itemToFind.id === itemToAdd.id)
            let itemUpdated = {...itemClicked, quantity: itemClicked.quantity+1}
            let cartWithoutOldItem = cart.filter(ItemToFilter => ItemToFilter.id !== itemUpdated.id)
            
            newCart = [...cartWithoutOldItem, itemUpdated]
            setCart(newCart)


          } else newCart = [...cart, newItem ]
        })
      }
      return newCart
    }
      setCart(updateCart)
  } 



  return (
    <div className="App">
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
        {itemsInShop.map(item => (
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
                onClick={() => {removeQuantityFromCart(cartItem)}}              
              >-</button>
              <span className="quantity-text center">{cartItem.quantity}</span>
              <button className="quantity-btn add-btn center"
                onClick={() => {addQuantityIntoCart(cartItem)}}
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

{/* QUESTIONS 
setCart( can have the name of the f or the newCart as argument here... I dont get it) */}