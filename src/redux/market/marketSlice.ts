import { createSlice } from '@reduxjs/toolkit'

interface MarketSliceState {
    market: []
    status: 'idle' | 'loading' | 'error'
}

const initialState: MarketSliceState = {
    market: [],
    status: 'idle',
}

const foodSlice = createSlice({
    name: 'market',
    initialState,
    reducers: {
        getMarket(state, action) {
            state.market = action.payload
            state.status = 'idle'
        },
    },
})

export const { getMarket } = foodSlice.actions
export default foodSlice.reducer
