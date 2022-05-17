import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { FaAngleLeft, FaCarAlt } from 'react-icons/fa'

import { selectMarketData } from '../../redux/market/selectors'
import { useSelector } from 'react-redux'

import { MarketType } from '../../redux/market/types'

import './Market.css'
import FoodCard from '../../components/FoodCard'

const Market = () => {
    const { id } = useParams()
    const [marketData, setMarketData] = useState<MarketType>()
    const marketSelector = useSelector(selectMarketData)

    useEffect(() => {
        const correctMarket = marketSelector.market.find(
            market => market.id === id
        )

        setMarketData(correctMarket)
    }, [id, marketSelector.market])

    return (
        <div className='root'>
            <Link to='/' className='back'>
                <FaAngleLeft /> Вернуться на главную
            </Link>
            {marketData && (
                <>
                    <div className='market__header'>
                        <h2>{marketData.name}</h2>

                        <div className='market__header-info'>
                            <div>
                                <FaCarAlt /> {marketData.timeDelivery} мин.
                            </div>
                            <div>Доставка {marketData.priceDelivery} ₽</div>
                        </div>
                    </div>
                    <div className='market__food'>
                        <div className='market__food-filter'>
                            <div className='market__food-filter_item market__food-filter_item_active'>
                                Популярное
                            </div>
                            <div className='market__food-filter_item'>
                                Пицца
                            </div>
                            <div className='market__food-filter_item'>
                                Роллы
                            </div>
                        </div>
                        <div className='market__food-wrapper'>
                            <FoodCard
                                image='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
                                title='Роллы'
                                description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur dicta sapiente, repellendus quos ipsum amet magnam. Modi quaerat ratione, cupiditate dignissimos, aliquid consequuntur maiores fugiat numquam, dolores amet vitae autem.'
                                calories='100'
                                price='800'
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Market
