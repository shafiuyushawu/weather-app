import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import client from '../api/client';

const initialState = {
  location: [],
  conditions: [],
  forecast: [],
  isLoading: false,
  error: null,
};

export const fetchWeatherCondtions = createAsyncThunk(
  'weather/fetchWeatherCondtions',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=fbb346f734f2486bb3c102838231704&q=bulk&days=5&aqi=no&alerts=no');
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(`Error: ${error}`);
    }
  },
);

const weatherSlice = createSlice({
  initialState,
  name: 'weather',
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherCondtions.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchWeatherCondtions.fulfilled, (state, action) => {
        const locations = action.payload.location;
        const currentConditions = action.payload.current;
        const { forecast } = action.payload;

        state.isLoading = false;
        state.location = locations;
        state.conditions = currentConditions;
        state.forecast = forecast;
      })
      .addCase(fetchWeatherCondtions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
      });
  },
});

export default weatherSlice.reducer;
