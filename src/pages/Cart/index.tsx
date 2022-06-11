import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom'
import { FaAngleLeft, FaRegFrown } from 'react-icons/fa'

import { useSelector } from 'react-redux'
import { selectCart } from '../../redux/cart/selectors'
import { selectAuth } from '../../redux/auth/selectors'

import Button from '../../components/Button'
import CartItem from '../../components/CartItem'
import OrderModal from '../../components/OrderModal'
import Layout from '../../components/Layout'

import './Cart.css'

const Cart: React.FC = () => {
    const [orderModal, setOrderModal] = useState<boolean>(false)
    const { cart, totalPrice } = useSelector(selectCart)
    const { token } = useSelector(selectAuth)
    const navigate = useNavigate()

    const openOrderModal = () => {
        !token && navigate('/login')
        setOrderModal(true)
    }

    const closeOrderModal = () => setOrderModal(false)

    if (cart.length === 0) {
        return <CartEmpty />
    }

    return (
        <Layout title='Корзина' content='Корзина с товарами'>
            <OrderModal
                isOpen={orderModal}
                onClose={closeOrderModal}
                totalPrice={totalPrice}
            />
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
                    <Button className='cart__button' onClick={openOrderModal}>
                        Заказать
                    </Button>
                </div>
            </div>
        </Layout>
    )
}

const CartEmpty: React.FC = () => {
    return (
        <Layout title='Корзина пустая' content='Корзина пустая без товаров'>
            <div className='root'>
                <Link to='/' className='back'>
                    <FaAngleLeft /> Вернуться на главную
                </Link>
                <div className='cart__empty'>
                    <FaRegFrown size='2rem' />
                    <h3>Корзина пустая</h3>
                    <p>
                        Для того, чтобы заказать еду, перейди на главную
                        страницу.
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default Cart
