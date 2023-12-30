import { configureStore } from "@reduxjs/toolkit";
import generalSliceReducer from "./generalSlice";
import videoListSLiceReducer from "./videoListSLice";
import searchCacheSliceReducer from "./searchCacheSlice";

const appStore = configureStore({
    reducer:{
        general:generalSliceReducer,
        videoList:videoListSLiceReducer,
        searchCache:searchCacheSliceReducer
    }
});

export default appStore;