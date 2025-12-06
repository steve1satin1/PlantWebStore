import { createSlice } from '@reduxjs/toolkit'

export const menuSlice = createSlice({
    name: "menu",
    initialState: {
        menu: false,
        cart: false
    },
    reducers: {
        openMenu: (state) => {
            state.cart = state.menu ? state.cart : false;
            state.menu = !state.menu; 
        },

        openCart: (state) => {
            state.cart = !state.cart;
        }
    }
})

export const { openMenu, openCart } = menuSlice.actions

export default menuSlice.reducer;