import { configureStore } from '@reduxjs/toolkit'

import productsSlice from './productsSlice'
import cartSlice from './cartSlice'
import userSlice from './userSlice'

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
    user: userSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
