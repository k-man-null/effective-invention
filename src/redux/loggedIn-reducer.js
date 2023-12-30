import { createSlice } from "@reduxjs/toolkit"
import { getSessionCookie } from "../utility-functions/auth"

const loggedIn = getSessionCookie();

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