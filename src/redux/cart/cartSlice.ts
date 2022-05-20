import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getTotalPrice } from '../../utils/getTotalPrice'
import { CartItemType, CartSliceState } from './types'

const initialState: CartSliceState = {
    cart: [],
    totalPrice: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItemType>) {
            const findItem = state.cart.find(
                obj => obj.id === action.payload.id
            )

            if (findItem) {
                findItem.count++
            } else {
                state.cart.push({
                    ...action.payload,
                    count: 1,
                })
            }

            state.totalPrice = getTotalPrice(state.cart)
        },
        minusItem(state, action: PayloadAction<string>) {
            const findItem = state.cart.find(obj => obj.id === action.payload)

            if (findItem) {
                findItem.count--
            }

            state.totalPrice = getTotalPrice(state.cart)
        },
        removeItem(state, action: PayloadAction<string>) {
            state.cart = state.cart.filter(obj => obj.id !== action.payload)
            state.totalPrice = getTotalPrice(state.cart)
        },
    },
})

export const { addItem, minusItem, removeItem } = cartSlice.actions
export default cartSlice.reducer
