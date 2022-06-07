import React, { useCallback, useEffect } from 'react'
import debounce from 'lodash.debounce'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectAuth } from '../../redux/auth/selectors'
import { selectCart } from '../../redux/cart/selectors'
import { changeSearch } from '../../redux/filter/filterSlice'
import { logout } from '../../redux/auth/authSlice'
import { FaShoppingCart } from 'react-icons/fa'

import './Header.css'

const Header: React.FC = () => {
    const [value, setValue] = React.useState<string>('')
    const dispatch = useDispatch()
    const { cart, totalPrice } = useSelector(selectCart)
    const { isLogin } = useSelector(selectAuth)

    const onChangeSearchValue = useCallback(
        debounce((value: string) => {
            dispatch(changeSearch(value))
        }, 400),
        []
    )

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
        onChangeSearchValue(event.target.value)
    }

    return (
        <div className='header'>
            <Link to={'/'} className='header-title'>
                <h2>Доставка еды</h2>
            </Link>

            <input
                type='text'
                placeholder='поиск ресторана'
                className='header-search'
                onChange={onChangeInput}
                value={value}
            />

            <div className='header__wrapper'>
                <div className='header__wrapper-cart'>
                    <p>{totalPrice} ₽</p>
                    <Link to='/cart'>
                        <FaShoppingCart />
                    </Link>
                </div>
                <div className='header__wrapper-links'>
                    {isLogin ? (
                        <>
                            <Link to='/orders'>Мои заказы</Link>
                            <Link to='/' onClick={() => dispatch(logout())}>
                                Выйти
                            </Link>
                        </>
                    ) : (
                        <Link to='/login'>Войти</Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header
