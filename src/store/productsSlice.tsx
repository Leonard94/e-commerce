import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { findProductById } from '@utils/findProductById'
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
  openProduct: null,
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setOpenProduct: (state, { payload }) => {
      state.openProduct = findProductById(state.productsList, payload)
    },
  },
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

export const { setOpenProduct } = productsSlice.actions
export default productsSlice.reducer
