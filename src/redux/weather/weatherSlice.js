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
        const { location } = action.payload;
        const { current } = action.payload;
        const { forecast } = action.payload;

        state.isLoading = false;
        state.location = {
          name: location.name,
          region: location.region,
        };
        state.conditions = {
          last_updated: current.last_updated,
          temp_c: current.temp_c,
          cloud: current.cloud,
          humidity: current.humidity,
          text: current.condition.text,
          icon: current.condition.icon,
        };
        state.forecast = forecast.forecastday.map((fcast) => ({
          date: fcast.date,
          maxtemp_c: fcast.day.maxtemp_c,
          mintemp_c: fcast.day.mintemp_c,
          avgtemp_c: fcast.day.avgtemp_c,
          avghumidity: fcast.day.avghumidity,
          daily_chance_of_rain: fcast.day.daily_chance_of_rain,
          daily_chance_of_snow: fcast.day.daily_chance_of_snow,
          text: fcast.day.condition.text,
          icon: fcast.day.condition.icon,
        }));
      })
      .addCase(fetchWeatherCondtions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
      });
  },
});

export default weatherSlice.reducer;
