import { configureStore } from "@reduxjs/toolkit";
import products from './slices/products.slice'
import cart from './slices/Cart.slice'
import openClose from './slices/toogleCcart.slice'

export default configureStore({
    reducer:{
        products,
        cart,
        openClose
    }
})