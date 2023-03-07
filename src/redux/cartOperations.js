import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPopularProducts } from 'services/fetchProducts';

export const getPopularProducts = createAsyncThunk(
  'getPopularItems',
  async (_, { rejectWithValue }) => {
    try {

      const data = await fetchPopularProducts();
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
