export interface CartItemType {
    id: string
    title: string
    image: string
    price: number
    count: number
    description: string
    restarautId: string | undefined
    restarautName: string | undefined
}

export interface CartSliceState {
    totalPrice: number
    cart: CartItemType[]
    errorMessage: string
    restarautId: string | undefined
}
