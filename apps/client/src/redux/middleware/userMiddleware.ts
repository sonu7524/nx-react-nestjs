import { Middleware } from '@reduxjs/toolkit'
import { loginUser, logout } from '../slices/userSlice'

// Custom middleware to persist user state to localStorage
export const userMiddleware: Middleware = (store) => (next) => (action) => {
    const result = next(action)

    if (loginUser.fulfilled.match(action)) {
        const user = action.payload
        localStorage.setItem('user', JSON.stringify(user))
    }

    if (logout.match(action)) {
        localStorage.removeItem('user')
    }

    return result
}
