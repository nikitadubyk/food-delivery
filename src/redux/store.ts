import { configureStore } from '@reduxjs/toolkit'
import marketSlice from './market/marketSlice'
import sliderSlice from './slider/sliderSlice'

export const store = configureStore({
    reducer: { market: marketSlice, sliders: sliderSlice },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
