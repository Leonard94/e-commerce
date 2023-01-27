import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { TInitialStateUser } from '@type/user'
import { api } from '../services/api'

type TLogin = {
  email: string
  password: string
}

type TRegister = {
  email: string
  password: string
  first_name: string
}

export const login = createAsyncThunk('user/login', async (data: TLogin) => {
  try {
    const response = await api.post(`/auth/login`, data)
    return response.data
  } catch (error: any) {
    throw new Error(error.response.data.message)
  }
})

export const register = createAsyncThunk(
  'user/register',
  async (data: TRegister) => {
    try {
      const response = await api.post(`/auth/register`, data)
      return response.data
    } catch (error: any) {
      throw new Error(error.response.data.message)
    }
  }
)

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
    builder.addCase(login.pending, (state) => {
      state.status = 'pending'
      state.error = null
    })

    builder.addCase(register.fulfilled, (state, { payload }) => {
      state.isAuth = true
      state.status = 'fulfilled'
      state.error = null
      state.userInfo = payload
    })
    builder.addCase(register.rejected, (state, { error }: any) => {
      state.isAuth = false
      state.status = 'error'
      state.error = error.message
    })
    builder.addCase(register.pending, (state) => {
      state.status = 'pending'
      state.error = null
    })
  },
})

export const {} = userSlice.actions
export default userSlice.reducer
