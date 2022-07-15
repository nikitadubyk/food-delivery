import { ImageData } from './types'
import { createSlice } from '@reduxjs/toolkit'

interface SliderImages {
    sliderImages: ImageData[]
}

const initialState: SliderImages = {
    sliderImages: [
        {
            image: 'https://1place.su/ru/blog/wp-content/uploads/2019/05/post79.jpg',
            url: '629748eb79e162cbc73c7639',
        },
        {
            image: 'https://moskva-rest.ru/wp-content/uploads/2020/01/aktsii2020-1.jpg',
            url: '6297497979e162cbc73c7642',
        },
        {
            image: 'https://restorannews.ru/upload/iblock/4c8/540-Skidki-RestoranNews-01.jpg',
            url: '629748eb79e162cbc73c7639',
        },
        {
            image: 'https://1place.su/ru/blog/wp-content/uploads/2019/05/diskont-20-1.jpg',
            url: '6297497979e162cbc73c7642',
        },
        {
            image: 'http://resto-zametki.com.ua/images/uploads/images2013_1/123_1.jpg',
            url: '629748eb79e162cbc73c7639',
        },
    ],
}

const sliderSlice = createSlice({
    name: 'slider',
    initialState,
    reducers: {},
})

export default sliderSlice.reducer
