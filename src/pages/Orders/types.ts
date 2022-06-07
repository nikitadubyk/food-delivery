export interface Order {
    address: string
    date: string
    delivery: string
    name: string
    order: { count: number; price: number; title: string }[]
    phone: string
    restarautName: string
    totalPrice: number
}

export interface OrdersType {
    marketName: string
    date: Date
    orders: Order[]
}
