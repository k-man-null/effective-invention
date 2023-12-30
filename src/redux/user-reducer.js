import { createSlice } from "@reduxjs/toolkit"
import { getUserFromStorage } from "../utility-functions/auth"

const initialUser = getUserFromStorage();

const initialState = {
    user: initialUser
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateUser: (state, action) => {
            state.user = action.payload
            console.log(action.payload)
        }
    }
})

export default userSlice.reducer;
export const { updateUser } = userSlice.actions;