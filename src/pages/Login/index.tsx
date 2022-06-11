import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/auth/authSlice'
import { useHttp } from '../../hook/http.hook'

import Button from '../../components/Button'
import Spinner from '../../components/Spinner'

import { FaAngleLeft } from 'react-icons/fa'
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
    const { loading, error, request } = useHttp()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onSubmit: SubmitHandler<FormInputs> = async data => {
        if (isLoginForm) {
            const res = await request(
                `${process.env.REACT_APP_BACKEND_URL}/users/signup`,
                'POST',
                JSON.stringify(data)
            )

            dispatch(
                login({
                    token: res.token,
                    userId: res.userId,
                })
            )

            if (res.token && res.userId) {
                reset()
                navigate('/')
            }
        } else {
            const res = await request(
                `${process.env.REACT_APP_BACKEND_URL}/users/login`,
                'POST',
                JSON.stringify(data)
            )
            dispatch(
                login({
                    token: res.token,
                    userId: res.userId,
                })
            )

            if (res.token && res.userId) {
                reset()
                navigate('/')
            }
        }
    }

    const switchForm = () => setIsLoginForm(prevState => !prevState)

    return (
        <div className='root'>
            <Link to='/' className='back'>
                <FaAngleLeft /> Вернуться на главную
            </Link>

            <h2 className='form__title'>
                {isLoginForm ? 'Регистрация' : 'Войти'}
            </h2>

            {error && <p className='form__error'>{error}</p>}

            <form onSubmit={handleSubmit(onSubmit)} className='form'>
                <div>
                    <h4>Почта</h4>
                    <input
                        {...register('email', {
                            required: 'Заполните это поле',
                        })}
                        type='email'
                        placeholder='Ваш email'
                    />
                    {errors.email?.message && <p>{errors.email?.message}</p>}
                </div>

                {isLoginForm && (
                    <div>
                        <h4>Имя</h4>
                        <input
                            {...register('name', {
                                required: 'Заполните это поле',
                            })}
                            type='text'
                            placeholder='Ваше имя'
                        />
                        {errors.name?.message && <p>{errors.name?.message}</p>}
                    </div>
                )}

                <div>
                    <h4>Пароль</h4>
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
                    {errors.password?.message && (
                        <p>{errors.password?.message}</p>
                    )}
                </div>
                <Button type='submit'>
                    {isLoginForm ? 'Регистрация' : 'Войти'}
                </Button>

                <div className='form__switch' onClick={switchForm}>
                    {isLoginForm
                        ? 'Перейти во вкладку вход'
                        : 'У меня нет аккаунта'}
                </div>
            </form>
            {loading && <Spinner width={50} height={50} />}
        </div>
    )
}

export default Login
