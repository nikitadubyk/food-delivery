import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useHttp } from '../../hook/http.hook'

import { clearCart, clearErrorMessage } from '../../redux/cart/cartSlice'
import { setCorrectMarket } from '../../redux/market/marketSlice'
import { changeActiveFilter } from '../../redux/filter/filterSlice'

import { selectCart } from '../../redux/cart/selectors'
import { filteredProductSelector } from '../../redux/filter/selectors'

import Modal from '../../components/Modal'
import Button from '../../components/Button'
import FoodItem from '../../components/FoodItem'
import FoodFilter from '../../components/FoodFilter'
import Spinner from '../../components/Spinner'

import { FaAngleLeft, FaCarAlt, FaRegFrown } from 'react-icons/fa'
import './Market.css'

const Market: React.FC = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const filteredProduct = useSelector(filteredProductSelector)
    const { errorMessage } = useSelector(selectCart)

    const { request, loading, error } = useHttp()

    const closeModalHandler = () => dispatch(clearErrorMessage())
    const clearCartHandler = () => {
        dispatch(clearCart())
        closeModalHandler()
    }

    useEffect(() => {
        dispatch(setCorrectMarket(null))
        const fetchMarket = async () =>
            await request(`${process.env.REACT_APP_BACKEND_URL}/market/${id}`)

        fetchMarket().then(result => dispatch(setCorrectMarket(result)))
        dispatch(changeActiveFilter('Все'))
    }, [id])

    return (
        <>
            <Modal
                isOpen={!!errorMessage}
                title='Очистить корзину?'
                message='В вашей корзине есть блюда из другого ресторана.
                Они будут удалены для добавления новых.'
                footer={
                    <div>
                        <Button onClick={closeModalHandler} reverse>
                            Закрыть
                        </Button>
                        <Button onClick={clearCartHandler}>
                            Очистить корзину
                        </Button>
                    </div>
                }
            />

            <div className='root'>
                <Link to='/' className='back'>
                    <FaAngleLeft /> Вернуться на главную
                </Link>
                {loading && <Spinner />}
                {filteredProduct && (
                    <>
                        <div className='market__header'>
                            <h2>{filteredProduct.name}</h2>

                            <div className='market__header-info'>
                                <div>
                                    <FaCarAlt /> {filteredProduct.timeDelivery}
                                    мин.
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
                                        <FoodItem
                                            id={food.id}
                                            restarautId={filteredProduct.id}
                                            restarautName={filteredProduct.name}
                                            image={food.image}
                                            title={food.title}
                                            description={food.description}
                                            calories={food.calories}
                                            gramm={food.gramm}
                                            price={food.price}
                                            key={food.id}
                                        />
                                    )
                                })}
                                {filteredProduct.food?.length === 0 && (
                                    <div className='market__food-error'>
                                        <FaRegFrown size='2rem' />
                                        <p>
                                            Товаров по этому фильтру не найдено
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                )}
                {error && (
                    <div className='market__food-error'>
                        <FaRegFrown size='2rem' />
                        <p>
                            Упс, произошла ошибка, возможно не найден ресторан
                        </p>
                    </div>
                )}
            </div>
        </>
    )
}

export default Market
