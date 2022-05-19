import { createSlice } from '@reduxjs/toolkit'
import { MarketType } from './types'

interface MarketSliceState {
    market: MarketType[]
    correctMarket: MarketType | undefined | null
    loadingStatus: 'idle' | 'loading' | 'error'
}

const initialState: MarketSliceState = {
    correctMarket: null,
    market: [
        {
            id: '1',
            image: 'https://mykharkov.info/wp-content/uploads/2015/10/sushi-680x454.jpg',
            name: 'Крутое Заведение',
            priceDelivery: '150 - 200',
            timeDelivery: '20 - 30',
            filters: ['Все', 'Пицца', 'Роллы', 'Бургеры'],
            food: [
                {
                    id: '1',
                    title: 'Роллы Калифорния',
                    image: 'https://eda.ru/img/eda/c620x415/s1.eda.ru/StaticContent/Photos/160812092111/160819214540/p_O.jpg',
                    description: 'Лучшие роллы в городе!',
                    calories: '120',
                    gramm: '220',
                    price: '900',
                    filter: 'Роллы',
                },
                {
                    id: '2',
                    title: 'Роллы Филадельфия',
                    image: 'https://dipanda.ru/upload/iblock/b88/b88fa37b97807192eb77a00c42d74ca1.jpg',
                    description: 'Лучшие роллы в городе!',
                    calories: '120',
                    gramm: '1400',
                    price: '999',
                    filter: 'Роллы',
                },
                {
                    id: '3',
                    title: 'Большой Бургер',
                    image: 'https://emosurff.com/i/0004R8005tf0/img_3911.jpg',
                    description:
                        'Какой-то очень вкусный бургер с великолепной котлеткой',
                    calories: '500',
                    gramm: '1500',
                    price: '399',
                    filter: 'Бургеры',
                },
                {
                    id: '4',
                    title: 'Пицца Маргарита',
                    image: 'https://km-doma.ru/assets/gallery_thumbnails/31/319484a4bb725e4eacab62c7f0c7f1ed.jpg',
                    description: 'Самая вкусная пицца в мире!',
                    calories: '120',
                    gramm: '1400',
                    price: '300',
                    filter: 'Пицца',
                },
                {
                    id: '5',
                    title: 'Пицца Пепперони',
                    image: 'https://cdn.bellinigroup.ru/upload/201910/5daff068ae43b_1080x1080_fit_70_1c1c1e.png',
                    description: 'Большая пицца с большими колбасками!',
                    calories: '600',
                    gramm: '500',
                    price: '499',
                    filter: 'Пицца',
                },
                {
                    id: '6',
                    title: 'Запеченные роллы',
                    image: 'https://static.1000.menu/img/content/24109/zapechennye-rolly-s-forelu_1511518963_1_max.jpg',
                    description:
                        'Запеченные роллы с какой-то то там вкусной начинкой',
                    calories: '299',
                    gramm: '300',
                    price: '299',
                    filter: 'Роллы',
                },
            ],
        },
        {
            id: '2',
            image: 'https://normoflorin.ru/wp-content/uploads/2020/06/1-2.jpg',
            name: 'Лучший ресторан',
            priceDelivery: 'от 200',
            timeDelivery: '45-60',
            filters: ['Все', 'Пицца', 'Бургеры'],
            food: [
                {
                    id: '7',
                    title: 'Пицца Мексикано',
                    image: 'https://global-sushi.kz/wp-content/uploads/2021/03/%D0%BF%D0%B8%D1%86%D1%86%D0%B0-%D0%BC%D0%B5%D0%BA%D1%81%D0%B8%D0%BA%D0%B0%D0%BD%D0%BE.jpg',
                    description: 'Мексиканская пицца',
                    calories: '900',
                    gramm: '750',
                    price: '699',
                    filter: 'Пицца',
                },
                {
                    id: '8',
                    title: 'Пицца с ветчиной и помидорами',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS83W5ZdqEIAx1bVLZn0UtHim8PU1Qqu5iscw&usqp=CAU',
                    description: 'Ветчина и помидоры сделают тебя счастливей',
                    calories: '1100',
                    gramm: '750',
                    price: '499',
                    filter: 'Пицца',
                },
                {
                    id: '9',
                    title: 'Королевская Пицца',
                    image: 'https://kingpizza.kh.ua/resources/products/20211123202045_366bb8053.jpg',
                    description: 'Все самые вкусные ингридиенты и все тут!',
                    calories: '1200',
                    gramm: '1500',
                    price: '999',
                    filter: 'Пицца',
                },
                {
                    id: '10',
                    title: 'Бургер Воппер-Оппер',
                    image: 'https://myastoriya.com.ua/upload/resize_cache/iblock/f6a/900_650_1/f6ad926cd92b30195696f0236d58df92.png',
                    description: 'Вкусный большой бургер',
                    calories: '1400',
                    gramm: '1100',
                    price: '399',
                    filter: 'Бургеры',
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
