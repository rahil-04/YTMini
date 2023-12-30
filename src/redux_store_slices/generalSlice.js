import { createSlice } from "@reduxjs/toolkit";

const generalSlice = createSlice({
    name: "general",
    initialState:{
        isMenuOpen: true,
        showSuggestion: false
    },
    reducers:{
        toggleMenu: (state)=>{
            state.isMenuOpen = !state.isMenuOpen
        },
        closeMenu: (state)=>{
            state.isMenuOpen = false; 
        },
        closeSuggestion: (state)=>{
            state.showSuggestion = false;
        },
        openSuggestion: (state)=>{
            state.showSuggestion = true;
        }
    }
})

export const {toggleMenu,closeMenu,closeSuggestion,openSuggestion} = generalSlice.actions;
export default generalSlice.reducer;