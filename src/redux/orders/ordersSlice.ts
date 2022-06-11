import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { OrdersType } from '../../pages/Orders/types'

interface OrdersState {
    orders: OrdersType | null
    loadingStatus: 'loading' | 'idle' | 'error'
}

const initialState: OrdersState = {
    orders: null,
    loadingStatus: 'idle',
}

export const fetchOrders = createAsyncThunk(
    '/api/orders',
    async (userId: string | null) => {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users`, {
            method: 'POST',
            body: JSON.stringify({ userId }),
            headers: { 'Content-Type': 'application/json' },
        })

        return res.json()
    }
)

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchOrders.pending, state => {
                state.loadingStatus = 'loading'
            })
            .addCase(
                fetchOrders.fulfilled,
                (state, action: PayloadAction<OrdersType>) => {
                    state.loadingStatus = 'idle'
                    state.orders = action.payload
                }
            )
            .addCase(fetchOrders.rejected, state => {
                state.loadingStatus = 'error'
            })
    },
})

export default ordersSlice.reducer
