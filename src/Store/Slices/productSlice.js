import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { createSelector } from '@reduxjs/toolkit';
import {axiosClient} from "../../utils/axios"
export const getProducts = createAsyncThunk('/products/getproducts',async()=>{
    try {
        const response = await axiosClient.get('/products/getproducts');
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
})

const product = createSlice({
    name: 'product',
    initialState :{
        isLoading:false,
        error:null,
        products:[]
    },
    extraReducers: (builder) =>{
        builder.addCase(getProducts.fulfilled,(state,action) =>{
            state.products = action.payload;
    })}
})

export default product.reducer;