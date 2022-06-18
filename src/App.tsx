import { lazy, Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useAuth } from './hook/auth.hook'

import Header from './components/Header'
import Home from './pages/Home'
import Spinner from './components/Spinner'

const Market = lazy(() => import('./pages/Market'))
const Cart = lazy(() => import('./pages/Cart'))
const Login = lazy(() => import('./pages/Login'))
const Orders = lazy(() => import('./pages/Orders'))

function App() {
    const { token } = useAuth()

    return (
        <>
            <Header />
            <main>
                <Suspense fallback={<Spinner />}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/market/:id' element={<Market />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='/login' element={<Login />} />
                        {token && <Route path='/orders' element={<Orders />} />}
                        <Route path='*' element={<Navigate to='/' replace />} />
                    </Routes>
                </Suspense>
            </main>
        </>
    )
}

export default App
