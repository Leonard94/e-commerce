import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { TInitialStateUser } from '@type/user'
import { api } from '../services/api'

export const login = createAsyncThunk('user/login', async (data: any) => {
  try {
    const response = await api.post(`/auth/login`, data)
    return response.data
  } catch (error: any) {
    throw new Error(error.response.data.message)
  }
})

const initialState: TInitialStateUser = {
  isAuth: false,
  userInfo: null,
  status: 'pending',
  error: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.isAuth = true
      state.status = 'fulfilled'
      state.error = null
      state.userInfo = payload
    })
    builder.addCase(login.rejected, (state, { error }: any) => {
      state.isAuth = false
      state.status = 'error'
      state.error = error.message
    })
    builder.addCase(login.pending, (state, { payload }: any) => {
      state.status = 'pending'
      state.error = null
    })
  },
})

export const {} = userSlice.actions
export default userSlice.reducer
