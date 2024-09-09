import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./Slices/CartSlice";
import productReducer from "./Slices/productSlice";
import profileReducer from "./Slices/userProfileSlice";
export default configureStore({
    reducer: {
        cartReducer,
        productReducer,
        profileReducer
    }
})