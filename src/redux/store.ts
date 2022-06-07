import { configureStore } from '@reduxjs/toolkit'

import marketSlice from './market/marketSlice'
import sliderSlice from './slider/sliderSlice'
import filterSlice from './filter/filterSlice'
import cartSlice from './cart/cartSlice'
import authSlice from './auth/authSlice'
import ordersSlice from './orders/ordersSlice'

export const store = configureStore({
    reducer: {
        market: marketSlice,
        filter: filterSlice,
        sliders: sliderSlice,
        cart: cartSlice,
        auth: authSlice,
        orders: ordersSlice,
    },
    devTools: true,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
