import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Market from './pages/Market'
import Cart from './pages/Cart'
import Login from './pages/Login'

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/market/:id' element={<Market />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
        </>
    )
}

export default App
