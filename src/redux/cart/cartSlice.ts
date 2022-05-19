import { createSlice } from '@reduxjs/toolkit'

interface CartState {
    cart: []
    total: number
}

const initialState: CartState = {
    cart: [],
    total: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
})

export const {} = cartSlice.reducer
export default cartSlice.reducer
