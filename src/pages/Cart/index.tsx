import React from 'react'

import { Link } from 'react-router-dom'
import { FaPlus, FaMinus, FaAngleLeft } from 'react-icons/fa'

import Button from '../../components/Button'

import './Cart.css'

const Cart: React.FC = () => {
    return (
        <div className='root'>
            <Link to='/' className='back'>
                <FaAngleLeft /> Вернуться на главную
            </Link>
            <h2 className='cart__title'>Корзина</h2>

            <p className='cart__market'>
                Ваш заказ в ресторане <span>Лучший ресторан</span>
            </p>

            <div className='cart'>
                <div className='cart__item'>
                    <div className='cart__wrapper'>
                        <img
                            src='https://emosurff.com/i/0004R8005tf0/img_3911.jpg'
                            alt='бургер'
                        />
                        <div>
                            <div className='cart__descr'>
                                <h4>Бургер Вкусный</h4>

                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Cum officiis expedita est
                                    molestiae veniam distinctio et in ea,
                                    incidunt ipsa sapiente!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='cart__item-count'>
                        <button className='cart__item-button'>
                            <FaMinus />
                        </button>
                        <div>1</div>
                        <button className='cart__item-button'>
                            <FaPlus />
                        </button>
                    </div>

                    <div className='cart__price'>700 ₽</div>

                    <div className='cart__delete'>&#10010;</div>
                </div>

                <div className='cart__order'>
                    <div className='cart__total'>
                        Сумма заказа: <span>1900 ₽</span>
                    </div>
                    <Button className='cart__button'>Заказать</Button>
                </div>
            </div>
        </div>
    )
}

export default Cart
