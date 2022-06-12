import React, { useEffect } from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { useAppDispatch } from '../../redux/hooks'
import { useSelector } from 'react-redux'
import { fetchOrders } from '../../redux/orders/ordersSlice'
import { selectOrders } from '../../redux/orders/selector'
import { selectAuth } from '../../redux/auth/selectors'

import Spinner from '../../components/Spinner'
import OrderItem from '../../components/OrderItem'
import Layout from '../../components/Layout'

import './Orders.css'

const Orders: React.FC = () => {
    const dispatch = useAppDispatch()
    const { loadingStatus, orders } = useSelector(selectOrders)
    const { userId } = useSelector(selectAuth)

    useEffect(() => {
        dispatch(fetchOrders(userId))
    }, [])

    return (
        <Layout title='Мои заказы' content='Страница с заказами'>
            <div className='root'>
                <Link to='/' className='back'>
                    <FaAngleLeft /> Вернуться на главную
                </Link>
                <h2>Мои заказы</h2>

                {loadingStatus === 'loading' && <Spinner />}
                <div className='orders__wrapper'>
                    {loadingStatus === 'error' && (
                        <p>
                            Упс, произошла ошибка при загрузке заказов.
                            Попробуйте позже
                        </p>
                    )}
                    {loadingStatus !== 'loading' &&
                        orders?.orders.length === 0 && (
                            <p>
                                Заказов нет, похоже вы ничего не заказывали. Для
                                заказа перейдите на главную страницу
                            </p>
                        )}
                    {loadingStatus !== 'loading' &&
                        orders &&
                        orders.orders.map((orders, i) => (
                            <OrderItem
                                key={i}
                                date={orders.date}
                                order={orders.order}
                                restarautName={orders.restarautName}
                                totalPrice={orders.totalPrice}
                            />
                        ))}
                </div>
            </div>
        </Layout>
    )
}

export default Orders
