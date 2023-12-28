import { createSlice } from "@reduxjs/toolkit";

const videoListSlice = createSlice({
    name:"videoList",
    initialState:{
        video:[]
    },
    reducers:{
        setVideos: (state,action)=>{
            state.video = action.payload;
        }
    }

})

export const {setVideos} = videoListSlice.actions
export default videoListSlice.reducer;