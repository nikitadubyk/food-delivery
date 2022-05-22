import { RootState } from '../store'
import { createSelector } from '@reduxjs/toolkit'

export const selectFilter = (state: RootState) => state.filter

export const filteredProductSelector = createSelector(
    (state: RootState) => state.filter.activeFilter,
    (state: RootState) => state.market.correctMarket,
    (filter, market) => {
        if (filter === 'Все') {
            return market
        } else {
            const filteredFood = market?.food.filter(
                food => food.filter === filter
            )

            return {
                ...market,
                food: filteredFood,
            }
        }
    }
)

export const filteredMarketSelector = createSelector(
    (state: RootState) => state.filter.search,
    (state: RootState) => state.market.market,
    (search, market) => {
        if (search.length === 0) {
            return market
        } else {
            const filteredMarket = market.filter(market =>
                market.name?.toLowerCase().includes(search.toLowerCase())
            )
            console.log(filteredMarket, search)
            return filteredMarket
        }
    }
)
