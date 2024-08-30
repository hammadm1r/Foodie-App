import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from '@reduxjs/toolkit';

const selectCartItems = state => state.cartReducer.cart;
export const selectTotalPrice = createSelector(
    [selectCartItems], // Input selector
    (cartItems) => cartItems.reduce(
      (total, item) => total + item.price * item.quantity, 0
    )
  );

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
        },
        updateQuantity:(state,action) =>{
            state.cart.map(item => { 
                if(item.name == action.payload.name){
                item.quantity=action.payload.quantity;
            }
        })}
}
}
)
export default cartSlice.reducer;
export const {addItem,removeItem,updateQuantity} = cartSlice.actions;