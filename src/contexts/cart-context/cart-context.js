import { createContext } from 'react'

const CartContext = createContext({
     hidden: true,

     // we are using an empty function
     // because it's definition will be defined inside of our component
     // we didnt assign it null because we cannot invoke a "null" object
     toggleHidden: () => {}
})

export default CartContext