import React from 'react'

import styles from './OrderItem.module.css'

interface OrderItemProps {
    restarautName: string
    date: string
    order: { count: number; price: number; title: string }[]
    totalPrice: number
}

const OrderItem: React.FC<OrderItemProps> = ({
    restarautName,
    date,
    order,
    totalPrice,
}) => {
    return (
        <div className={styles.order__item}>
            <h3>{restarautName}</h3>
            <div className={styles.order__date}>Дата заказа: {date}</div>
            <div className={styles.order__wrapper}>
                {order.map((order, i) => (
                    <div className={styles.order__info} key={i}>
                        <div>
                            <b>{order.title}</b>
                        </div>
                        <div>Количество: {order.count}</div>
                        <div>Цена: {order.price} ₽</div>
                    </div>
                ))}
            </div>

            <div className={styles.total}>Итого: {totalPrice} ₽</div>
        </div>
    )
}

export default OrderItem
