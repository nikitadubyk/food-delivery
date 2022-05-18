import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectFilter } from '../../redux/filter/selector'
import { selectMarketData } from '../../redux/market/selectors'
import { changeActiveFilter } from '../../redux/filter/filterSlice'

import './FoodFilter.css'

const FoodFilter = () => {
    const { correctMarket } = useSelector(selectMarketData)
    const { activeFilter } = useSelector(selectFilter)
    const dispatch = useDispatch()

    const changeFiter = (filter: string) => {
        dispatch(changeActiveFilter(filter))
    }

    return (
        <div className='food-filter'>
            {correctMarket &&
                correctMarket.filters.map((filter, i) => {
                    return (
                        <div
                            className={`food-filter_item ${
                                activeFilter === filter &&
                                'food-filter_item_active'
                            }`}
                            key={i}
                            onClick={() => changeFiter(filter)}
                        >
                            {filter}
                        </div>
                    )
                })}
        </div>
    )
}

export default FoodFilter
