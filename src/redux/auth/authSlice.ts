import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
    isLogin: boolean
}

const initialState: AuthState = {
    isLogin: true,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: state => {
            state.isLogin = true
        },
        logout: state => {
            state.isLogin = false
        },
    },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
