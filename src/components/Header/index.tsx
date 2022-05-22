import React, { useCallback } from 'react'
import debounce from 'lodash.debounce'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectorCart } from '../../redux/cart/selector'
import { changeSearch } from '../../redux/filter/filterSlice'
import { FaShoppingCart } from 'react-icons/fa'

import './Header.css'

const Header: React.FC = () => {
    const dispatch = useDispatch()
    const { totalPrice } = useSelector(selectorCart)
    const [value, setValue] = React.useState<string>('')

    const onChangeSearchValue = useCallback(
        debounce((value: string) => {
            dispatch(changeSearch(value))
        }, 400),
        []
    )

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
                    <Link to='/singup'>Sing Up</Link>
                    <Link to='/login'>Log In</Link>
                </div>
            </div>
        </div>
    )
}

export default Header
