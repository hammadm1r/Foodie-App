import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { createSelector } from '@reduxjs/toolkit';
import {axiosClient} from "../../utils/axios"
export const userProfile = createAsyncThunk('/auth/profile',async()=>{
    try {
        const response = await axiosClient.get('/auth/profile');
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
})

const profile = createSlice({
    name: 'profile',
    initialState :{
        isLoading:false,
        error:null,
        profile:{}
    },
    extraReducers: (builder) =>{
        builder.addCase(userProfile.fulfilled,(state,action) =>{
            state.profile = action?.payload?.result?.userProfile;
    })}
})

export default profile.reducer;