import React from 'react'

import { Link } from 'react-router-dom'
import { FaAngleLeft } from 'react-icons/fa'

import { useDispatch, useSelector } from 'react-redux'
import { selectorCart } from '../../redux/cart/selector'

import Button from '../../components/Button'
import CartItem from '../../components/CartItem'

import './Cart.css'

const Cart: React.FC = () => {
    const dispatch = useDispatch()
    const { cart, totalPrice } = useSelector(selectorCart)

    if (cart.length === 0) {
        return <p>Корзина пустая</p>
    }

    return (
        <div className='root'>
            <Link to='/' className='back'>
                <FaAngleLeft /> Вернуться на главную
            </Link>
            <h2 className='cart__title'>Корзина</h2>

            <p className='cart__market'>
                Ваш заказ в ресторане <span>{cart[0].restarautName}</span>
            </p>

            <div className='cart'>
                {cart &&
                    cart.map(item => {
                        return (
                            <CartItem
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                count={item.count}
                                price={item.price}
                            />
                        )
                    })}
            </div>
            <div className='cart__order'>
                <div className='cart__total'>
                    Сумма заказа: <span>{totalPrice} ₽</span>
                </div>
                <Button className='cart__button'>Заказать</Button>
            </div>
        </div>
    )
}

export default Cart
