import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axios";
const selectCartItems = (state) => state.cartReducer.cart;
export const selectTotalPrice = createSelector(
  [selectCartItems], // Input selector
  (cartItems) =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
);
export const addToCart = createAsyncThunk("/cart/addtocart", async (body) => {
  try {
    const response = await axiosClient.post("/cart/addtocart", body);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
});
export const removeFromCart = createAsyncThunk("/cart/removefromcart", async (body) => {
  try {
    const response = await axiosClient.delete("/cart/removefromcart", body);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
});
export const getCart = createAsyncThunk("/cart/getcart", async () => {
    try {
      const response = await axiosClient.get("/cart/getcart");
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  });

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.cart.push(action.payload);
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.name !== action.payload.name
      );
    },
    updateQuantity: (state, action) => {
      state.cart.map((item) => {
        if (item.name == action.payload.name) {
          item.quantity = action.payload.quantity;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addToCart.fulfilled, (state, action) => {
      
    })
    .addCase(getCart.fulfilled,(state,action)=>{
        state.cart=action.payload.cart
    })
    .addCase(removeFromCart.fulfilled,(state,action)=>{
  })
  },
});
export default cartSlice.reducer;
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
