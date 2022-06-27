import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
    token: string | null
    userId: string | null
    expiration: number | null
}

const initialState: AuthState = {
    token: null,
    userId: null,
    expiration: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload.token
            state.userId = action.payload.userId
            state.expiration = action.payload.expiration

            // const tokenExpiration = new Date().getTime() + 1000 * 60 * 60 * 5

            localStorage.setItem(
                'userData',
                JSON.stringify({
                    token: state.token,
                    userId: state.userId,
                    expiration: state.expiration,
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
