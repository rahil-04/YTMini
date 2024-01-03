import { configureStore } from "@reduxjs/toolkit";
import generalSliceReducer from "./generalSlice";
import videoListSLiceReducer from "./videoListSLice";
import searchCacheSliceReducer from "./searchCacheSlice";
import liveChatSliceReducer from "./liveChatSlice"

const appStore = configureStore({
    reducer:{
        general:generalSliceReducer,
        videoList:videoListSLiceReducer,
        searchCache:searchCacheSliceReducer,
        liveChat:liveChatSliceReducer
    }
});

export default appStore;