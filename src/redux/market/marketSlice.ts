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
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/market`)
    return await res.json()
})

const marketSlice = createSlice({
    name: 'market',
    initialState,
    reducers: {
        setCorrectMarket(state, action: PayloadAction<MarketType | null>) {
            state.correctMarket = action.payload
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

export const { setCorrectMarket } = marketSlice.actions
export default marketSlice.reducer
