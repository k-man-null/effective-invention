import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user-reducer";
import loggedInReducer from "./loggedIn-reducer";
import walletReducer from "./wallet-reducer";

const store = configureStore({
    reducer: {
        user: userReducer,
        loggedIn: loggedInReducer,
        wallet: walletReducer
    }
})

export default store;