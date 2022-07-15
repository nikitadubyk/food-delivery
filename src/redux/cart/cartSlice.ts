import { CartItemType, CartSliceState } from './types'
import { getCartFromLS } from '../../utils/getCartFromLS'
import { getTotalPrice } from '../../utils/getTotalPrice'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: CartSliceState = getCartFromLS()

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action: PayloadAction<CartItemType>) {
            const findItem = state.cart.find(
                obj => obj.id === action.payload.id
            )

            if (state.cart.length === 0) {
                state.restarautId = action.payload.restarautId
            }

            if (state.restarautId === action.payload.restarautId) {
                if (findItem) {
                    findItem.count++
                } else {
                    state.cart.push({
                        ...action.payload,
                        count: 1,
                    })
                }
            } else {
                state.errorMessage =
                    'У вас уже есть товары в корзине с другого ресторана'
            }

            state.totalPrice = getTotalPrice(state.cart)
        },
        plusItem(state, action: PayloadAction<string>) {
            const findItem = state.cart.find(obj => obj.id === action.payload)

            if (findItem) {
                findItem.count++
            }

            state.totalPrice = getTotalPrice(state.cart)
        },
        minusItem(state, action: PayloadAction<string>) {
            const findItem = state.cart.find(obj => obj.id === action.payload)

            if (findItem) {
                findItem.count > 1 && findItem.count--
            }

            state.totalPrice = getTotalPrice(state.cart)
        },
        removeItem(state, action: PayloadAction<string>) {
            state.cart = state.cart.filter(obj => obj.id !== action.payload)
            state.totalPrice = getTotalPrice(state.cart)
        },
        clearCart(state) {
            state.cart = []
            state.totalPrice = 0
            state.restarautId = ''
        },
        clearErrorMessage(state) {
            state.errorMessage = ''
        },
    },
})

export const {
    addItemToCart,
    plusItem,
    minusItem,
    removeItem,
    clearCart,
    clearErrorMessage,
} = cartSlice.actions
export default cartSlice.reducer
