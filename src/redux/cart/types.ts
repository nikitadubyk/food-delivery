export interface CartItemType {
    id: string
    restarautId: string | undefined
    restarautName: string | undefined
    description: string
    title: string
    image: string
    price: number
    count: number
}

export interface CartSliceState {
    cart: CartItemType[]
    totalPrice: number
    restarautId: string | undefined
    errorMessage: string
}
