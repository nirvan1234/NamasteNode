import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./userSlice";
import feedReducer from "./feedSlice";
import connectionReducer from "./ConnectionSlice";
import requestReducer from "./RequestSlice";

const appStore = configureStore({
    reducer:{
        user: counterReducer,
        feed: feedReducer,
        connections:connectionReducer,
        requests: requestReducer
    }
})

export default appStore;