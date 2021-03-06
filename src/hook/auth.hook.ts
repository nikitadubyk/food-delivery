import { useEffect } from 'react'
import { selectAuth } from '../redux/auth/selectors'
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../redux/auth/authSlice'

export const useAuth = () => {
    const dispatch = useDispatch()
    const { token } = useSelector(selectAuth)

    useEffect(() => {
        //@ts-ignore
        const storedData = JSON.parse(localStorage.getItem('userData'))

        if (
            storedData &&
            storedData.token &&
            storedData.expiration > new Date().getTime()
        ) {
            dispatch(
                login({
                    token: storedData.token,
                    userId: storedData.userId,
                    expiration: storedData.expiration,
                })
            )
        } else {
            dispatch(logout())
        }
    }, [])

    return { token }
}
