import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/auth/authSlice'

import Button from '../../components/Button'

import './Login.css'

interface FormInputs {
    email: string
    password: string
    name?: string
}

const Login: React.FC = () => {
    const [isLoginForm, setIsLoginForm] = useState<boolean>(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormInputs>()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onSubmit: SubmitHandler<FormInputs> = data => {
        console.log(data)
        reset()
        dispatch(login())
        navigate('/')
    }

    const switchForm = () => setIsLoginForm(prevState => !prevState)

    return (
        <div className='root'>
            <h2 className='form__title'>
                {isLoginForm ? 'Регистрация' : 'Войти'}
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className='form'>
                <input
                    {...register('email', { required: 'Заполните это поле' })}
                    type='email'
                    placeholder='Ваш email'
                />
                {errors.email?.message && <p>{errors.email?.message}</p>}

                {isLoginForm && (
                    <>
                        <input
                            {...register('name', {
                                required: 'Заполните это поле',
                            })}
                            type='text'
                            placeholder='Ваше имя'
                        />
                        {errors.name?.message && <p>{errors.name?.message}</p>}
                    </>
                )}

                <input
                    {...register('password', {
                        required: 'Заполните это поле',
                        minLength: {
                            value: 4,
                            message: 'Минимум 4 символа',
                        },
                    })}
                    type='password'
                    placeholder='Ваш пароль'
                />
                {errors.password?.message && <p>{errors.password?.message}</p>}
                <Button type='submit'>
                    {isLoginForm ? 'Регистрация' : 'Войти'}
                </Button>

                <div className='form__switch' onClick={switchForm}>
                    {isLoginForm
                        ? 'Перейти во вкладку вход'
                        : 'У меня нет аккаунта'}
                </div>
            </form>
        </div>
    )
}

export default Login
