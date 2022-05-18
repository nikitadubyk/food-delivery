import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { FaAngleLeft, FaCarAlt } from 'react-icons/fa'

import { changeFiterId, getCurrectMarket } from '../../redux/market/marketSlice'
import { selectMarketData } from '../../redux/market/selectors'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import './Market.css'
import FoodCard from '../../components/FoodCard'

const Market = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const marketData = useSelector(selectMarketData)

    const changeFiter = (id: string) => {
        dispatch(changeFiterId(id))
    }

    useEffect(() => {
        dispatch(getCurrectMarket(id))
    }, [id, marketData.market, dispatch])

    return (
        <div className='root'>
            <Link to='/' className='back'>
                <FaAngleLeft /> Вернуться на главную
            </Link>
            {marketData.correctMarket && (
                <>
                    <div className='market__header'>
                        <h2>{marketData.correctMarket.name}</h2>

                        <div className='market__header-info'>
                            <div>
                                <FaCarAlt />{' '}
                                {marketData.correctMarket.timeDelivery} мин.
                            </div>
                            <div>
                                Доставка{' '}
                                {marketData.correctMarket.priceDelivery} ₽
                            </div>
                        </div>
                    </div>
                    <div className='market__food'>
                        <div className='market__food-filter'>
                            {marketData.correctMarket.filters.map(
                                (filter, i) => {
                                    return (
                                        <div
                                            className={`market__food-filter_item ${
                                                marketData.filter === filter &&
                                                'market__food-filter_item_active'
                                            }`}
                                            key={i}
                                            onClick={() => changeFiter(filter)}
                                        >
                                            {filter}
                                        </div>
                                    )
                                }
                            )}
                        </div>
                        <div className='market__food-wrapper'>
                            {marketData.correctMarket.food.map(food => {
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
