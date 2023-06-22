import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        currentUser: null
    },
    reducers: {
        loginSuccess: (state, { payload }) => {
            state.currentUser = payload
        }
    }
})


export const { loginSuccess } = authSlice.actions
export default authSlice.reducer