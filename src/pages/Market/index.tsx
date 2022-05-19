import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { FaAngleLeft, FaCarAlt } from 'react-icons/fa'
import { createSelector } from '@reduxjs/toolkit'

import FoodCard from '../../components/FoodCard'
import FoodFilter from '../../components/FoodFilter'
import { RootState } from '../../redux/store'
import { getCurrectMarket } from '../../redux/market/marketSlice'
import { useSelector, useDispatch } from 'react-redux'

import './Market.css'

const Market = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    const filteredProductSelector = createSelector(
        (state: RootState) => state.filter.activeFilter,
        (state: RootState) => state.market.correctMarket,
        (filter, market) => {
            if (filter === 'Все') {
                return market
            } else {
                const filteredFood = market?.food.filter(
                    food => food.filter === filter
                )

                console.log(filteredFood, market)
                return {
                    ...market,
                    food: filteredFood,
                }
            }
        }
    )

    const filteredProduct = useSelector(filteredProductSelector)

    useEffect(() => {
        dispatch(getCurrectMarket(id))
    }, [id, dispatch])

    return (
        <div className='root'>
            <Link to='/' className='back'>
                <FaAngleLeft /> Вернуться на главную
            </Link>
            {filteredProduct && (
                <>
                    <div className='market__header'>
                        <h2>{filteredProduct.name}</h2>

                        <div className='market__header-info'>
                            <div>
                                <FaCarAlt /> {filteredProduct.timeDelivery} мин.
                            </div>
                            <div>
                                Доставка {filteredProduct.priceDelivery} ₽
                            </div>
                        </div>
                    </div>
                    <div className='market__food'>
                        <FoodFilter />
                        <div className='market__food-wrapper'>
                            {filteredProduct.food?.map(food => {
                                return (
                                    <FoodCard
                                        image={food.image}
                                        title={food.title}
                                        description={food.description}
                                        calories={food.calories}
                                        price={food.price}
                                        key={food.id}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Market
