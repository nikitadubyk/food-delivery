import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { FaAngleLeft, FaCarAlt } from 'react-icons/fa'

import { getCurrectMarket } from '../../redux/market/marketSlice'
import { selectMarketData } from '../../redux/market/selectors'
import { useSelector, useDispatch } from 'react-redux'

import './Market.css'
import FoodCard from '../../components/FoodCard'
import FoodFilter from '../../components/FoodFilter'

const Market = () => {
    const { id } = useParams()
    const { market, correctMarket } = useSelector(selectMarketData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCurrectMarket(id))
    }, [id, market, dispatch])

    return (
        <div className='root'>
            <Link to='/' className='back'>
                <FaAngleLeft /> Вернуться на главную
            </Link>
            {correctMarket && (
                <>
                    <div className='market__header'>
                        <h2>{correctMarket.name}</h2>

                        <div className='market__header-info'>
                            <div>
                                <FaCarAlt /> {correctMarket.timeDelivery} мин.
                            </div>
                            <div>Доставка {correctMarket.priceDelivery} ₽</div>
                        </div>
                    </div>
                    <div className='market__food'>
                        <FoodFilter />
                        <div className='market__food-wrapper'>
                            {correctMarket.food.map(food => {
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
