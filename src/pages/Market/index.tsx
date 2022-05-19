import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getCurrectMarket } from '../../redux/market/marketSlice'
import { changeActiveFilter } from '../../redux/filter/filterSlice'
import { filteredProductSelector } from '../../redux/filter/selector'
import { FaAngleLeft, FaCarAlt, FaRegFrown } from 'react-icons/fa'

import FoodCard from '../../components/FoodCard'
import FoodFilter from '../../components/FoodFilter'

import './Market.css'

const Market: React.FC = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const filteredProduct = useSelector(filteredProductSelector)

    useEffect(() => {
        dispatch(getCurrectMarket(id))
        dispatch(changeActiveFilter('Все'))
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
                                        id={food.id}
                                        restarautId={filteredProduct.id}
                                        image={food.image}
                                        title={food.title}
                                        description={food.description}
                                        calories={food.calories}
                                        price={food.price}
                                        key={food.id}
                                    />
                                )
                            })}
                            {filteredProduct.food?.length === 0 && (
                                <div className='market__food-error'>
                                    <FaRegFrown size='2rem' />
                                    <p>Товаров по этому фильтру не найдено</p>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
            {!filteredProduct && (
                <div className='market__food-error'>
                    <FaRegFrown size='2rem' />
                    <p>Упс, ресторан не найден</p>
                </div>
            )}
        </div>
    )
}

export default Market
