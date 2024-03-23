import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async()=>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res.data;
})

const usersSlice = createSlice({
    name : "users",
    initialState : {
        isLoading :false,
        users : [],
        error : null
    },
    extraReducers : (builder)=>{
        builder.addCase(fetchUsers.pending, (state)=>{
            state.isLoading = true
        });
        builder.addCase(fetchUsers.fulfilled, (state, action)=>{
            state.isLoading = false,
            state.error = null,
            state.users = action.payload
        });
        builder.addCase(fetchUsers.rejected, (state, action)=>{
            state.isLoading = false,
            state.error = action.payload,
            state.users = []
        })

    }
})

export default usersSlice.reducer;