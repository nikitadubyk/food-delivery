import { createSlice } from '@reduxjs/toolkit'
import { ImageData } from './types'

interface SliderImages {
    sliderImages: ImageData[]
    loadingStatus: 'idle' | 'loading' | 'error'
}

const initialState: SliderImages = {
    sliderImages: [
        {
            image: 'https://1place.su/ru/blog/wp-content/uploads/2019/05/post79.jpg',
            url: '1',
        },
        {
            image: 'https://moskva-rest.ru/wp-content/uploads/2020/01/aktsii2020-1.jpg',
            url: '2',
        },
        {
            image: 'https://restorannews.ru/upload/iblock/4c8/540-Skidki-RestoranNews-01.jpg',
            url: '3',
        },
        {
            image: 'https://1place.su/ru/blog/wp-content/uploads/2019/05/diskont-20-1.jpg',
            url: '4',
        },
        {
            image: 'http://resto-zametki.com.ua/images/uploads/images2013_1/123_1.jpg',
            url: '5',
        },
    ],
    loadingStatus: 'idle',
}

const sliderSlice = createSlice({
    name: 'slider',
    initialState,
    reducers: {},
})

export const {} = sliderSlice.actions
export default sliderSlice.reducer
