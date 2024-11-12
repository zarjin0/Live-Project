import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products?limit=6");
  return response.json();
});
const initialState = {
  products: [],
  isLoading: false,
  error: null,
  cart: [],
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});
export const { searchProduct, addToCart, removeFromCart } =
  productSlice.actions;
export default productSlice.reducer;
