import { configureStore } from '@reduxjs/toolkit'

import cartSlice from './cart/cartSlice'
import authSlice from './auth/authSlice'
import marketSlice from './market/marketSlice'
import sliderSlice from './slider/sliderSlice'
import filterSlice from './filter/filterSlice'
import ordersSlice from './orders/ordersSlice'

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        auth: authSlice,
        market: marketSlice,
        filter: filterSlice,
        orders: ordersSlice,
        sliders: sliderSlice,
    },
    devTools: true,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
