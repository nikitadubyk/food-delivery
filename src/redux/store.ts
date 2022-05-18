import { configureStore } from '@reduxjs/toolkit'
import marketSlice from './market/marketSlice'
import sliderSlice from './slider/sliderSlice'
import filterSlice from './filter/filterSlice'

export const store = configureStore({
    reducer: { market: marketSlice, filter: filterSlice, sliders: sliderSlice },
    devTools: true,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
