import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { MarketType } from './types'

interface MarketSliceState {
    market: MarketType[]
    correctMarket: MarketType | undefined | null
    loadingStatus: 'idle' | 'loading' | 'error'
}

const initialState: MarketSliceState = {
    correctMarket: null,
    market: [],
    loadingStatus: 'idle',
}

export const fetchMarkets = createAsyncThunk('/api/market', async () => {
    const res = await fetch('http://localhost:5000/api/market')
    return await res.json()
})

const marketSlice = createSlice({
    name: 'market',
    initialState,
    reducers: {
        getCurrectMarket(state, action: PayloadAction<string | undefined>) {
            state.correctMarket = state.market.find(
                market => market.id === action.payload
            )
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchMarkets.pending, state => {
                state.loadingStatus = 'loading'
            })
            .addCase(
                fetchMarkets.fulfilled,
                (state, action: PayloadAction<MarketType[]>) => {
                    state.loadingStatus = 'idle'
                    state.market = action.payload
                }
            )
            .addCase(fetchMarkets.rejected, state => {
                state.loadingStatus = 'error'
            })
    },
})

export const { getCurrectMarket } = marketSlice.actions
export default marketSlice.reducer
