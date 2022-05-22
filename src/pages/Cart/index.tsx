import React from 'react'

import { Link } from 'react-router-dom'
import { FaAngleLeft, FaRegFrown } from 'react-icons/fa'

import { useSelector } from 'react-redux'
import { selectorCart } from '../../redux/cart/selector'

import Button from '../../components/Button'
import CartItem from '../../components/CartItem'

import './Cart.css'

const Cart: React.FC = () => {
    const { cart, totalPrice } = useSelector(selectorCart)

    if (cart.length === 0) {
        return <CartEmpty />
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

const CartEmpty: React.FC = () => {
    return (
        <div className='cart__empty'>
            <FaRegFrown size='2rem' />
            <h3>Корзина пустая</h3>
            <p>Для того, чтобы заказать еду, перейди на главную страницу.</p>
        </div>
    )
}

export default Cart
