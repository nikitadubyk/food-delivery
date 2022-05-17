import { createSlice } from '@reduxjs/toolkit'
import { ImageData } from './types'

interface SliderImages {
    sliderImages: ImageData[]
    loadingStatus: 'idle' | 'loading' | 'error'
}

const initialState: SliderImages = {
    sliderImages: [
        {
            image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
            url: '1',
        },
        {
            image: 'https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg',
            url: '2',
        },
        {
            image: 'https://cdn-media-2.freecodecamp.org/w1280/5f9c9a4c740569d1a4ca24c2.jpg',
            url: '3',
        },
        {
            image: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg',
            url: '4',
        },
        {
            image: 'https://cdn.searchenginejournal.com/wp-content/uploads/2019/08/c573bf41-6a7c-4927-845c-4ca0260aad6b-1520x800.jpeg',
            url: '5',
        },
        {
            image: 'https://helpx.adobe.com/content/dam/help/en/photoshop/how-to/compositing/jcr%3Acontent/main-pars/image/compositing_1408x792.jpg',
            url: '6',
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
