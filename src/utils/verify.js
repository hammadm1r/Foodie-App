import { axiosClient } from "./axios"
export const verify= async()=>{
    try {
        const response = await axiosClient.get('/auth/verify');
        return response;
    } catch (error) {
        return error;
    }
}