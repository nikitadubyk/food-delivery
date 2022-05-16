import { configureStore } from '@reduxjs/toolkit'
import marketSlice from './market/marketSlice'

export const store = configureStore({ reducer: { market: marketSlice } })

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
