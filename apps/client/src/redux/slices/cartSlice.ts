import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartItem = {
    id: string
    name: string
    price: number
    quantity: number
}

type CartState = {
    items: CartItem[]
}

const initialState: CartState = {
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CartItem>) {
            const item = state.items.find((i) => i.id === action.payload.id)
            if (item) {
                item.quantity += action.payload.quantity
            } else {
                state.items.push(action.payload)
            }
        },
        removeFromCart(state, action: PayloadAction<string>) {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        clearCart(state) {
            state.items = []
        },
    },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
