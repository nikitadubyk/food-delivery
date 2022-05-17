import { createSlice } from '@reduxjs/toolkit'

interface MarketSliceState {
    market: []
    loadingStatus: 'idle' | 'loading' | 'error'
}

const initialState: MarketSliceState = {
    market: [],
    loadingStatus: 'idle',
}

const marketSlice = createSlice({
    name: 'market',
    initialState,
    reducers: {
        getMarket(state, action) {
            state.market = action.payload
            state.loadingStatus = 'idle'
        },
    },
})

export const { getMarket } = marketSlice.actions
export default marketSlice.reducer
