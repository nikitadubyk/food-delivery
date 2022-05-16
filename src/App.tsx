import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
        </>
    )
}

export default App
