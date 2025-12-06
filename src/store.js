import { configureStore } from '@reduxjs/toolkit'
import productsReducer from "./productsSlice"
import menuReducer from "./menuSlice"
import cartReducer from "./cartSlice"

export default configureStore({
  reducer: {
    products: productsReducer,
    menu: menuReducer,
    cart: cartReducer
  },
})