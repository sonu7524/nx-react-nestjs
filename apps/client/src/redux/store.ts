import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import { productReducer } from './slices/productSlice'
import { userReducer } from './slices/userSlice'
import { userMiddleware } from './middleware/userMiddleware'

// Load user from localStorage (if available)
const userFromStorage = localStorage.getItem('user')
const preloadedUser = userFromStorage ? JSON.parse(userFromStorage) : null

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer,
        user: userReducer,
    },
    preloadedState: {
        user: {
            user: preloadedUser,
            loading: false,
            error: null,
        },
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch