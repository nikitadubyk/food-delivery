import debounce from 'lodash.debounce'
import { Link } from 'react-router-dom'
import { FiTruck } from 'react-icons/fi'
import { FaShoppingCart } from 'react-icons/fa'
import { GrLogout, GrLogin } from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'

import { logout } from '../../redux/auth/authSlice'
import { selectAuth } from '../../redux/auth/selectors'
import { selectCart } from '../../redux/cart/selectors'
import { changeSearch } from '../../redux/filter/filterSlice'

import './Header.css'

const Header: React.FC = () => {
    const dispatch = useDispatch()
    const { token } = useSelector(selectAuth)
    const [value, setValue] = useState<string>('')
    const { cart, totalPrice } = useSelector(selectCart)

    const onChangeSearchValue = useCallback(
        debounce((value: string) => {
            dispatch(changeSearch(value))
        }, 400),
        []
    )

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
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
                    {token ? (
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

            <div className='header__mobile__wrapper'>
                <Link to={'/'} className='header__mobile__wrapper-title'>
                    <h2>Доставка еды</h2>
                </Link>

                <div className='header__mobile__wrapper-links'>
                    <Link to='/cart' className='header__mobile__wrapper-link'>
                        <FaShoppingCart />
                    </Link>
                    {token ? (
                        <>
                            <Link
                                to='/orders'
                                className='header__mobile__wrapper-link'
                            >
                                <FiTruck />
                            </Link>
                            <Link
                                to='/'
                                onClick={() => dispatch(logout())}
                                className='header__mobile__wrapper-link'
                            >
                                <GrLogout />
                            </Link>
                        </>
                    ) : (
                        <Link to='/login'>
                            <GrLogin />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header
