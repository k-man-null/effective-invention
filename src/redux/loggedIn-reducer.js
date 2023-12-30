import { createSlice } from "@reduxjs/toolkit"
import { getUserFromStorage } from "../utility-functions/auth"

const user = getUserFromStorage();

let loggedIn = false;

if(user != null) {
    loggedIn = true
}

const initialState = {
    loggedIn
}

const loggedInSlice = createSlice({
    name: "loggedIn",
    initialState,
    reducers: {
        updateLoggedIn: (state, action) => {
            state.loggedIn = action.payload
        }
    }
})

export default loggedInSlice.reducer
export const { updateLoggedIn } = loggedInSlice.actions