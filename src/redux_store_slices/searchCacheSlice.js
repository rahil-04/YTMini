import { createSlice } from "@reduxjs/toolkit";

const searchCacheSlice = createSlice({
    name: "searchCache",
    initialState:{},
    reducers:{
        addToCache: (state,action)=>{
            state = {...state,...action.payload}
            return state
        }
    }
})

export const {addToCache} = searchCacheSlice.actions;
export default searchCacheSlice.reducer