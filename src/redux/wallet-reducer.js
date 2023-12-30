import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wallet: {

    }
}

const walletSlice = createSlice({
    name: "wallet",
    initialState,
    reducers: {
        updateWallet: (state, action) => {
            state.wallet = action.payload
        }
    }
})

export default walletSlice.reducer;
export const { updateWallet } = walletSlice.actions;