export interface MarketFoodType {
    id: string
    image: string
    title: string
    gramm: string
    price: number
    filter: string
    calories: string
    description: string
}

export interface MarketType {
    filters: string[]
    id: string | undefined
    food: MarketFoodType[]
    name: string | undefined
    image: string | undefined
    timeDelivery: string | undefined
    priceDelivery: string | undefined
}
