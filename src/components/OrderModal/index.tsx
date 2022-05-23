import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { selectCart } from '../../redux/cart/selectors'
import { FormValues, ModalViewProps, OrderModalProps } from './types'

import Modal from '../Modal'
import Button from '../Button'

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
    const { cart } = useSelector(selectCart)
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitSuccessful },
        reset,
    } = useForm<FormValues>()

    const onSubmit: SubmitHandler<FormValues> = data => {
        const obj = {
            ...data,
            order: {
                ...cart.map(food => {
                    return {
                        title: food.title,
                        count: food.count,
                    }
                }),
                totalPrice,
            },
        }

        console.log(obj)
        reset()

        setTimeout(() => {
            onClose()
        }, 3000)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form__order'>
            {isSubmitSuccessful && (
                <h2>Спасибо за заказ, менеджер свяжется с вами!</h2>
            )}
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
                {errors.address?.message && <p>{errors.address?.message}</p>}
            </div>
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
                <input
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

            <select {...register('delivery', { required: true })}>
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
        </form>
    )
}

export default OrderModal
