import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
    name:"liveChat",
    initialState:{
        message:[]
    },
    reducers:{
        addMessage: (state,action)=>{
            state.message.splice(60,1);
            state.message.unshift(action.payload);
            return state;
        }
    }
})

export const {addMessage} = liveChatSlice.actions;
export default liveChatSlice.reducer;