import { createSlice } from '@reduxjs/toolkit'

import { TInitialStateCart } from '../types/cart'

const initialState: TInitialStateCart = {
  cartProductsList: [],
  cartTotal: 7777,
  itemsQuantity: 0,
}

export const productsSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, { payload }) => {
      const currentSizeId = payload.product.sizes[payload.currentSize].size_id
      const alreadyHaveThisSize = state.cartProductsList.findIndex(
        (item) => item.size_id === currentSizeId
      )

      if (alreadyHaveThisSize === -1) {
        const { sizes, ...rest } = payload.product
        const data = { ...rest, ...sizes[payload.currentSize] }
        data.quantity = 1
        data.totalPrice = data.price

        state.cartProductsList.push(data)
      } else {
        state.cartProductsList[alreadyHaveThisSize].quantity += 1
      }
      state.itemsQuantity += 1
    },

    deleteProduct: (state, { payload }) => {
      // ! ESLINT
      state.cartProductsList = state.cartProductsList.filter((product) => {
        if (product.size_id === payload) {
          state.itemsQuantity -= product.quantity
        } else {
          return product
        }
      })

      productsSlice.caseReducers.updateTotal(state)
    },
    incrementQuantity: (state, { payload }) => {
      state.cartProductsList.forEach((product) => {
        if (product.size_id === payload) {
          product.quantity += 1
        }
      })
      state.itemsQuantity += 1
      productsSlice.caseReducers.updateTotal(state)
    },
    decrementQuantity: (state, { payload }) => {
      state.cartProductsList.forEach((product) => {
        if (product.size_id === payload) {
          product.quantity -= 1
          product.totalPrice -= product.price
        }
      })
      state.itemsQuantity -= 1
      productsSlice.caseReducers.updateTotal(state)
    },
    updateTotal: (state) => {
      console.log('Считаем сумму')
      //! const newTotal = state.cartProductsList.reduce(
      //   (acc, product) => acc + product.cartTotal,
      //   0
      // )
      state.cartTotal = 123123
    },
  },
})

export const {
  addProductToCart,
  deleteProduct,
  incrementQuantity,
  decrementQuantity,
} = productsSlice.actions
export default productsSlice.reducer
