import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
    token: string | null
    userId: string | null
}

const initialState: AuthState = {
    token: null,
    userId: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload.token
            state.userId = action.payload.userId

            const tokenExpiration = new Date().getTime() * 1000 * 60 * 60 * 5

            localStorage.setItem(
                'userData',
                JSON.stringify({
                    token: state.token,
                    userId: state.userId,
                    expiration: tokenExpiration,
                })
            )
        },
        logout: state => {
            state.token = null
            state.userId = null
            localStorage.removeItem('userData')
        },
    },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
