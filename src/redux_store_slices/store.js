import { configureStore } from "@reduxjs/toolkit";
import generalSliceReducer from "./generalSlice";
import videoListSLiceReducer from "./videoListSLice";
import searchCacheSliceReducer from "./searchCacheSlice";
import liveChatSliceReducer from "./liveChatSlice";
import searchListReducer from "./searchListSlice";
import historySliceReducer from "./historySlice";

const appStore = configureStore({
    reducer:{
        general:generalSliceReducer,
        videoList:videoListSLiceReducer,
        searchCache:searchCacheSliceReducer,
        liveChat:liveChatSliceReducer,
        searchList: searchListReducer,
        history: historySliceReducer
    }
});

export default appStore;