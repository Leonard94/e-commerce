import { createSlice } from '@reduxjs/toolkit'
import { TInitialStateUser } from '@type/user'

const initialState: TInitialStateUser = {
  isAuth: false,
  userInfo: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
})

export const {} = userSlice.actions
export default userSlice.reducer
