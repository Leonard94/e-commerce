import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../services/api'

import { TInitialState } from '../types/product'

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await api.get(`/products`)
    return await response.data
  }
)

const initialState: TInitialState = {
  productsList: [],
  status: 'pending',
  error: null,
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = 'pending'
    })
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
      state.status = 'fulfilled'
      state.productsList = payload
    })
    builder.addCase(fetchProducts.rejected, (state, { payload }: any) => {
      state.error = payload
      state.status = 'error'
    })
  },
})

export default productsSlice.reducer
