import { createSlice } from '@reduxjs/toolkit'
import { MarketType } from './types'

interface MarketSliceState {
    market: MarketType[]
    correctMarket: MarketType | undefined
    loadingStatus: 'idle' | 'loading' | 'error'
}

const initialState: MarketSliceState = {
    correctMarket: undefined,
    market: [
        {
            id: '1',
            image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
            name: 'Test Market',
            priceDelivery: '150 - 200',
            timeDelivery: '20 - 30',
            filters: ['Все', 'Пицца', 'Роллы', 'Бургеры'],
            food: [
                {
                    id: '12',
                    title: 'Роллы',
                    image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
                    description: 'Лучшие роллы в городе!',
                    calories: '120',
                    gramm: '1400',
                    price: '999',
                    filter: 'Роллы',
                },
                {
                    id: '1212',
                    title: 'Роллы 1234',
                    image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
                    description: 'Лучшие роллы в городе!',
                    calories: '120',
                    gramm: '1400',
                    price: '999',
                    filter: 'Пицца',
                },
                {
                    id: '12321',
                    title: 'Роллы 4',
                    image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
                    description: 'Лучшие роллы в городе!',
                    calories: '120',
                    gramm: '1400',
                    price: '999',
                    filter: 'Бургеры',
                },
                {
                    id: '12312',
                    title: 'Роллы 1234',
                    image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
                    description: 'Лучшие роллы в городе!',
                    calories: '120',
                    gramm: '1400',
                    price: '999',
                    filter: 'Роллы',
                },
                {
                    id: '12',
                    title: 'Роллы',
                    image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
                    description: 'Лучшие роллы в городе!',
                    calories: '120',
                    gramm: '1400',
                    price: '999',
                    filter: 'Пицца',
                },
                {
                    id: '1212',
                    title: 'Роллы 1234',
                    image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
                    description: 'Лучшие роллы в городе!',
                    calories: '120',
                    gramm: '1400',
                    price: '999',
                    filter: 'Роллы',
                },
            ],
        },
        {
            id: '2',
            image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
            name: 'Test Market2',
            priceDelivery: '15 - 20',
            timeDelivery: '1230 - 123430',
            filters: ['Все', 'Популярное', 'Пицца', 'Роллы'],
            food: [
                {
                    id: '12',
                    title: 'Роллы',
                    image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
                    description: 'Лучшие роллы в городе!',
                    calories: '120',
                    gramm: '1400',
                    price: '999',
                    filter: 'Роллы',
                },
                {
                    id: '1212',
                    title: 'Роллы',
                    image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
                    description: 'Лучшие роллы в городе!',
                    calories: '120',
                    gramm: '1400',
                    price: '999',
                    filter: 'Роллы',
                },
                {
                    id: '12321',
                    title: 'Роллы',
                    image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
                    description: 'Лучшие роллы в городе!',
                    calories: '120',
                    gramm: '1400',
                    price: '999',
                    filter: 'Роллы',
                },
                {
                    id: '12312',
                    title: 'Роллы',
                    image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
                    description: 'Лучшие роллы в городе!',
                    calories: '120',
                    gramm: '1400',
                    price: '999',
                    filter: 'Роллы',
                },
            ],
        },
    ],
    loadingStatus: 'idle',
}

const marketSlice = createSlice({
    name: 'market',
    initialState,
    reducers: {
        getCurrectMarket(state, action) {
            state.correctMarket = state.market.find(
                market => market.id === action.payload
            )
        },
    },
})

export const { getCurrectMarket } = marketSlice.actions
export default marketSlice.reducer
