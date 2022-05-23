import { RootState } from '../store'

export const selectCart = (state: RootState) => state.cart

export const selectCartItemById = (id: string) => (state: RootState) =>
    state.cart.cart.find(food => food.id === id)
