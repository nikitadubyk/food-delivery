import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useHttp } from '../../hook/http.hook'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../../redux/cart/cartSlice'
import { useNavigate } from 'react-router-dom'
import { selectCart } from '../../redux/cart/selectors'
import { selectAuth } from '../../redux/auth/selectors'
import {
    FormValues,
    ModalViewProps,
    OrderModalProps,
    PostOrderType,
} from './types'

import Modal from '../Modal'
import Button from '../Button'
import Spinner from '../Spinner'
import InputMask from 'react-input-mask'

import './OrderModal.css'

const OrderModal: React.FC<OrderModalProps> = ({
    isOpen,
    onClose,
    totalPrice,
}) => {
    return (
        <Modal
            isOpen={isOpen}
            title='Оформление заказа'
            message={<ModalView onClose={onClose} totalPrice={totalPrice} />}
        />
    )
}

const ModalView: React.FC<ModalViewProps> = ({ onClose, totalPrice }) => {
    const [typeDelivery, setTypeDelivery] = useState<string>('Доставка')
    const [isSuccessful, setIsSuccessful] = useState<boolean>(false)

    const { loading, error, request } = useHttp()

    const { cart, restarautId } = useSelector(selectCart)
    const { token } = useSelector(selectAuth)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const postOrder = async (obj: PostOrderType) => {
        const res = await request(
            `${process.env.REACT_APP_BACKEND_URL}/order`,
            'POST',
            JSON.stringify(obj),
            {
                Authorization: 'Barear ' + token,
                'Content-Type': 'application/json',
            }
        )

        if (res) {
            setIsSuccessful(true)
            reset()

            setTimeout(() => {
                onClose()
                dispatch(clearCart())
                navigate('/')
            }, 3000)
        }
    }

    const onSubmit: SubmitHandler<FormValues> = async data => {
        const obj = {
            ...data,
            order: [
                ...cart.map(food => {
                    return {
                        title: food.title,
                        count: food.count,
                        price: food.price,
                    }
                }),
            ],
            totalPrice,
            restarautId,
        }

        postOrder(obj)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form__order'>
            {isSuccessful && (
                <h2>Спасибо за заказ, менеджер свяжется с вами!</h2>
            )}
            {error && (
                <h2 className='error__message'>
                    Упс, произошла ошибка, попробуйте еще!
                </h2>
            )}
            {typeDelivery === 'Доставка' && (
                <div>
                    <h4>Адрес</h4>
                    <input
                        {...register('address', {
                            required: 'Заполните это поле',
                            minLength: {
                                value: 6,
                                message: 'Введите правильный адрес',
                            },
                        })}
                        type='text'
                        placeholder='Ваш адрес'
                    />
                    {errors.address?.message && (
                        <p>{errors.address?.message}</p>
                    )}
                </div>
            )}
            <div>
                <h4>Имя</h4>
                <input
                    {...register('name', {
                        required: 'Заполните это поле',
                        minLength: {
                            value: 2,
                            message: 'Введите ваше имя',
                        },
                    })}
                    type='text'
                    placeholder='Ваше имя'
                />
                {errors.name?.message && <p>{errors.name?.message}</p>}
            </div>
            <div>
                <h4>Телефон</h4>
                <InputMask
                    mask='+380 71 99 99 999'
                    alwaysShowMask={true}
                    {...register('phone', {
                        required: 'Заполните это поле',
                        minLength: {
                            value: 10,
                            message: 'Введите правильный номер телефона',
                        },
                    })}
                    type='text'
                    placeholder='Ваш телефон'
                />
                {errors.phone?.message && <p>{errors.phone?.message}</p>}
            </div>

            <select
                {...register('delivery', { required: true })}
                onChange={e => setTypeDelivery(e.target.value)}
            >
                <option value='Доставка'>Доставка</option>
                <option value='Самовывоз'>Самовывоз</option>
            </select>
            {errors.delivery?.message && <p>{errors.delivery?.message}</p>}

            <div>
                <Button reverse onClick={onClose}>
                    Закрыть
                </Button>

                <Button type='submit'>Заказать!</Button>
            </div>
            {loading && <Spinner width={50} height={50} />}
        </form>
    )
}

export default OrderModal
