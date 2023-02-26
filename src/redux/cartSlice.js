import { createSlice } from '@reduxjs/toolkit';

import {} from './cartOperations';

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

// const onPending = state => {
//   state.isLoading = true;
// };

export const cartSlice = createSlice({
  name: 'cart',
  initialState: { ...initialState },
  reducers: {
    setInitState: (state, { payload }) => ({
      ...initialState,
    }),
  },
  extraReducers: builder => {
    // builder
    // .addCase(fetchCity.pending, onPending)
    // .addCase(fetchCity.fulfilled, (state, { payload }) => {
    //   state.isLoading = false;
    //   state.city = payload.cityName;
    //   state.cityID = payload.placeId;
    //   state.country = payload.country;
    // })
    // .addCase(fetchCity.rejected, (state, { payload }) => {
    //   state.isLoading = false;
    //   state.error = payload;
    // })
  },
});

export const { setInitState } = cartSlice.actions;

export default cartSlice.reducer;
