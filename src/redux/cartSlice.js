import { createSlice } from '@reduxjs/toolkit';

import { getPopularProducts } from './cartOperations';

const initialState = {
  products: [],
  popularProducts: [],
  isLoading: false,
  error: null,
};

const onPending = state => {
  state.isLoading = true;
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: { ...initialState },
  reducers: {
    setInitState: (state, { payload }) => ({
      ...initialState,
    }),
  },
  extraReducers: builder => {
    builder
      .addCase(getPopularProducts.pending, onPending)
      .addCase(getPopularProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.popularProducts = payload;
      })
      .addCase(getPopularProducts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { setInitState } = cartSlice.actions;

export default cartSlice.reducer;
