import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

export type Product = {
    id: string
    name: string
    description: string
    price: number
    image: string
}

type ProductsState = {
    products: Product[]
    loading: boolean
    error: string | null
}

const initialState: ProductsState = {
    products: [],
    loading: false,
    error: null,
}

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk<Product[]>('products/fetch', async () => {
    const res = await fetch('/api/products') // replace with your actual backend URL
    if (!res.ok) {
        throw new Error('Failed to fetch products')
    }
    return (await res.json()) as Product[]
})

// Slice using the async thunk
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
                state.products = action.payload
                state.loading = false
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.error = action.error.message || 'Something went wrong'
                state.loading = false
            })
    },
})

export const productReducer = productsSlice.reducer
