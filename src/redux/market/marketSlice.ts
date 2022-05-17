import { createSlice } from '@reduxjs/toolkit'
import { MarketType } from './types'

interface MarketSliceState {
    market: MarketType[]
    loadingStatus: 'idle' | 'loading' | 'error'
}

const initialState: MarketSliceState = {
    market: [
        {
            id: '1',
            image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
            name: 'Test Market',
            priceDelivery: '150 - 200',
            timeDelivery: '20 - 30',
        },
        {
            id: '2',
            image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
            name: 'Test Market2',
            priceDelivery: '15 - 20',
            timeDelivery: '1230 - 123430',
        },
        {
            id: '3',
            image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
            name: 'Test Market23',
            priceDelivery: '42314150 - 44200',
            timeDelivery: '24120 - 32340',
        },
        {
            id: '4',
            image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
            name: 'Test Market23',
            priceDelivery: '42314150 - 44200',
            timeDelivery: '24120 - 32340',
        },
        {
            id: '5',
            image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
            name: 'Test Market23',
            priceDelivery: '42314150 - 44200',
            timeDelivery: '24120 - 32340',
        },
    ],
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
