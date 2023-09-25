import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        currentUser: null,
        access_token: null
    },
    reducers: {
        loginSuccess: (state, { payload }) => {
            state.currentUser = payload
        },
        setAccessToken: (state, { payload }) => {
            state.access_token = payload
        },
    }
})


export const { loginSuccess, setAccessToken } = authSlice.actions
export default authSlice.reducer