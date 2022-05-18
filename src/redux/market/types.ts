export interface MarketFoodType {
    id: string
    image: string
    title: string
    description: string
    gramm: string
    calories: string
    price: string
    filter: string
}

export interface MarketType {
    id: string | undefined
    image: string | undefined
    name: string | undefined
    timeDelivery: string | undefined
    priceDelivery: string | undefined
    filters: string[]
    food: MarketFoodType[]
}
