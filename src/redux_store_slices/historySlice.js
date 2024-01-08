import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
    name:"history",
    initialState:{
        videos:[]
    },
    reducers:{
        setVideo:(state,action)=>{
            const newVal = action.payload
            if(!state.videos.includes(newVal))
            {
                state.videos.unshift(action.payload);
                return state;
            }
        }
    }
})

export const {setVideo} = historySlice.actions;
export default historySlice.reducer;