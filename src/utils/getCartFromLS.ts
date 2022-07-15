import { getTotalPrice } from './getTotalPrice'
import { CartItemType } from '../redux/cart/types'

export const getCartFromLS = () => {
    const data = localStorage.getItem('cart')
    const cart = data ? JSON.parse(data) : []
    const totalPrice = getTotalPrice(cart)
    const restarautId = cart?.length > 0 ? cart[0].restarautId : ''

    return {
        cart: cart as CartItemType[],
        totalPrice,
        restarautId,
        errorMessage: '',
    }
}
