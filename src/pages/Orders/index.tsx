import React from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import './Orders.css'

const DUMMY_ORDERS = [
    {
        marketName: 'Крутое заведение',
        date: new Date().toLocaleDateString(),
        order: [
            {
                title: 'Роллы вкусные',
                price: 1999,
                count: 6,
            },
            {
                title: 'Пицца вкусная',
                price: 399,
                count: 1,
            },
            {
                title: 'Бургер какой-то',
                price: 450,
                count: 1,
            },
        ],
    },

    {
        marketName: 'Лучшее заведение',
        date: new Date().toLocaleDateString(),
        order: [
            {
                title: 'Роллы вкусные',
                price: 1999,
                count: 6,
            },
            {
                title: 'Пицца вкусная',
                price: 399,
                count: 1,
            },
            {
                title: 'Бургер какой-то',
                price: 450,
                count: 1,
            },
        ],
    },
]

const Orders: React.FC = () => {
    return (
        <div className='root'>
            <Link to='/' className='back'>
                <FaAngleLeft /> Вернуться на главную
            </Link>
            <h2>Мои заказы</h2>

            <div className='orders__wrapper'>
                {DUMMY_ORDERS.map(orders => (
                    <div className='order__item'>
                        <h3>{orders.marketName}</h3>
                        <div className='order__date'>
                            Дата заказа: {orders.date}
                        </div>
                        <div className='order__wrapper'>
                            {orders.order.map(order => (
                                <div className='order__info'>
                                    <div>
                                        <b>{order.title}</b>
                                    </div>
                                    <div>Количество: {order.count}</div>
                                    <div>Цена: {order.price} ₽</div>
                                </div>
                            ))}
                        </div>

                        <div className='total'>
                            Итого:{' '}
                            {orders.order.reduce(
                                (sum, obj) => obj.price + sum,
                                0
                            )}{' '}
                            ₽
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Orders
