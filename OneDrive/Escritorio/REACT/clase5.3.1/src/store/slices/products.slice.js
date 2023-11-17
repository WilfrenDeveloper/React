import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProducts: (currentValue, action) => action.payload,
    addProduct: (currentValue, action) => [...currentValue, action.payload],
    deleteProduct: (currentValue, action) => currentValue.filter((e, index) => index !== action.payload)
  }
})

export const { setProducts, addProduct, deleteProduct } = productsSlice.actions

export default productsSlice.reducer