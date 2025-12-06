import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            console.log("cart items: ", state)
            state.forEach(element => {
                if (element.id === action.payload.id) {
                    console.log("item already in cart")
                    return;
                }
            });
            console.log({...action.payload, quantity: 1})
            state.push({...action.payload, quantity: 1})
        },
        removeItem: (state, action) => {
            state.forEach((item, index) => {
                if (item.id === action.payload.id) {
                    state.splice(index, 1);
                }
            })
        },
        incrementItem: (state, action) => {
            state.forEach((item) => {
                if (item.id === action.payload) {
                    item.quantity += 1
                }
            })
        },
        decrementItem: (state, action) => {
            state.forEach((item) => {
                if (item.id === action.payload && item.quantity > 1) {
                    item.quantity -= 1;
                }
            })
        }
    }
})

export const {addItem, removeItem, incrementItem, decrementItem} = cartSlice.actions;
export default cartSlice.reducer;