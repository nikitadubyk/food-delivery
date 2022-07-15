import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaAngleLeft } from 'react-icons/fa'

import { useAppDispatch } from '../../redux/hooks'
import { selectAuth } from '../../redux/auth/selectors'
import { selectOrders } from '../../redux/orders/selector'
import { fetchOrders } from '../../redux/orders/ordersSlice'

import Layout from '../../components/Layout'
import Spinner from '../../components/Spinner'
import OrderItem from '../../components/OrderItem'

import './Orders.css'

const Orders: React.FC = () => {
    const dispatch = useAppDispatch()
    const { token } = useSelector(selectAuth)
    const { loadingStatus, orders } = useSelector(selectOrders)

    useEffect(() => {
        dispatch(fetchOrders(token))
    }, [])

    return (
        <Layout title="Мои заказы" content="Страница с заказами">
            <div className="root">
                <Link to="/" className="back">
                    <FaAngleLeft /> Вернуться на главную
                </Link>
                <h2>Мои заказы</h2>

                {loadingStatus === 'loading' && <Spinner />}
                <div className="orders__wrapper">
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
                                totalPrice={orders.totalPrice}
                                restarautName={orders.restarautName}
                            />
                        ))}
                </div>
            </div>
        </Layout>
    )
}

export default Orders
