import { createSlice } from "@reduxjs/toolkit";

const searchList = createSlice({
    name: "searchList",
    initialState:{
        videos:[]
    },
    reducers:{
        setVideo:(state,action)=>{
            state.videos = action.payload;
        }
    }
})

export const {setVideo} = searchList.actions;
export default searchList.reducer;