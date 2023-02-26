// import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchCity = createAsyncThunk(
//   'getCity',
//   async ({ lat, long }, { getState, rejectWithValue }) => {
//     try {
//       if (lat && long) {
//         const data = await getCity(lat, long);
//         return data;
//       }
//       const { location } = getState();
//       const data = await getCity(location.latitude, location.longitude);

//       return data;
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue(error);
//     }
//   }
// );
