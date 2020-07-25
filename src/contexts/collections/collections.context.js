import {createContext} from 'react'

import SHOP_DATA from './shop.data'

// createContext is a method that can take anything
// object, strings, integers, etc.

const CollectionsContext = createContext(SHOP_DATA)
// Now effectively we are actually initializing our Collections Context
// to SHOP_DATA

export default CollectionsContext






