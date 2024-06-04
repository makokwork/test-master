import { createSlice } from "@reduxjs/toolkit";
import { getArrayIndexByObjectId } from "../functions";

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: []
  },
  reducers: {
    initProducts(state, action) {
      state.products = action.payload.products;
    },
    addProduct(state, action) {
      state.products = [...state.products, action.payload.product];
    },
    removeProduct(state, action) {
      state.products = [...state.products.filter((product) => product.id !== action.payload.productId)];
    },
    updateProduct(state, action) {
      const product = action.payload.product;

      const indexProductUpdate = getArrayIndexByObjectId(state.products, product.id);

      state.products[indexProductUpdate] = product;
    }
  },
  selectors: {
    selectProducts: state => state.products
  }
});

export const { initProducts, addProduct, removeProduct, updateProduct } = productsSlice.actions;
export const { selectProducts } = productsSlice.selectors;

export default productsSlice.reducer;