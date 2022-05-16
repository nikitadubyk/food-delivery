import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <Link to={'/'} className='header-title'>
                <h2>Доставка еды</h2>
            </Link>

            <input
                type='text'
                placeholder='поиск ресторана'
                className='header-search'
            />

            <div className='header__wrapper'>
                <div className='header__wrapper-cart'>
                    <p>0 руб.</p>
                    <FaShoppingCart />
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
