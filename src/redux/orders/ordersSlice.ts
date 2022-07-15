import { OrdersType } from '../../pages/Orders/types'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

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
    async (token: string | null) => {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users`, {
            method: 'POST',
            body: null,
            headers: { Authorization: 'Barear ' + token },
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
