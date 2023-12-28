import { configureStore } from "@reduxjs/toolkit";
import generalSliceReducer from "./generalSlice";
import videoListSLiceReducer from "./videoListSLice";

const appStore = configureStore({
    reducer:{
        general:generalSliceReducer,
        videoList:videoListSLiceReducer
    }
});

export default appStore;