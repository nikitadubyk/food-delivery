export interface Order {
    date: string
    name: string
    phone: string
    address: string
    delivery: string
    totalPrice: number
    restarautName: string
    order: { count: number; price: number; title: string }[]
}

export interface OrdersType {
    date: Date
    orders: Order[]
    marketName: string
}
