import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        cart: [],
    },
    reducers: {
        addItem:(state,action) =>{
            state.cart.push(action.payload)
        },
        removeItem:(state,action) =>{
            state.cart = state.cart.filter(item => item.name !== action.payload.name)
        }
}
}
)
export default cartSlice.reducer;
export const {addItem,removeItem} = cartSlice.actions;