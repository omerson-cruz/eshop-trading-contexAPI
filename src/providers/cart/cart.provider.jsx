import React, { createContext, useState, useEffect } from 'react'

import {
    addItemToCart,
    removeItemFromCart,
    filterItemFromCart,
    getCartItemsCount
 } from './cart.utils'


export const CartContext = createContext({
     hidden: true,

     // we are using an empty function
     // because it's definition will be defined inside of our component
     // we didnt assign it null because we cannot invoke a "null" object
     toggleHidden: () => {},


     cartItems: [], // will contain the items we add to our cart
     addItem: () => {},
     removeItem: () => {},
     clearItemFromCart: () => {},
     cartItemsCount: 0
})

const CartProvider = ({children}) => {
  // creating a "state" here so that we can pass this
  // to the child components
  const [hidden, setHidden] = useState(true)
  const [cartItems, setCartItems] = useState([])
  const [cartItemsCount, setCartItemsCount] = useState(0)

  const addItem = item => setCartItems(addItemToCart(cartItems, item))
  const removeItem = item => setCartItems(removeItemFromCart(cartItems, item))
  const clearItemFromCart = item => setCartItems(filterItemFromCart(cartItems, item))

  // this "toggleHidden" will replace the toggleHidden inside of the
  // CurrentUserContext
  const toggleHidden = () => setHidden(!hidden)

    // using "useEffect" for "total Cart Items quantity"
    useEffect(()=> {
        setCartItemsCount(getCartItemsCount(cartItems))
    }, [cartItems])  // so Only when cartItems is changed/modified

    // now all of our App.js components will now have access to
    // the data because we wrapped them inside of the "CartContext.Provider"
    return (
        <CartContext.Provider
            value={{
                hidden,
                toggleHidden,
                cartItems,
                addItem,
                removeItem,
                cartItemsCount,
                clearItemFromCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider