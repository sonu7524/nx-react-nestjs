import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

export type User = {
    id: string
    name: string
    email: string
    token: string // JWT or access token
}

type UserState = {
    user: User | null
    loading: boolean
    error: string | null
}

const initialState: UserState = {
    user: null,
    loading: false,
    error: null,
}

// Async thunk for logging in
export const loginUser = createAsyncThunk<User, { email: string; password: string }>(
    'user/login',
    async (credentials, thunkAPI) => {
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials),
            })
            if (!res.ok) {
                const error = await res.json()
                return thunkAPI.rejectWithValue(error.message || 'Login failed')
            }
            return (await res.json()) as User
        } catch (err: any) {
            return thunkAPI.rejectWithValue(err.message || 'Login error')
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout(state) {
            state.user = null
            state.error = null
            state.loading = false
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
                state.user = action.payload
                state.loading = false
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.error = action.payload as string
                state.loading = false
            })
    },
})

export const { logout } = userSlice.actions
export const userReducer = userSlice.reducer
