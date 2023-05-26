import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  location: [],
  conditions: [],
  forecast: [],
  forecastDetails: {},
  isLoading: false,
  error: null,
};

export const fetchWeatherCondtions = createAsyncThunk(
  'weather/fetchWeatherCondtions',
  async (query, thunkAPI) => {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=fbb346f734f2486bb3c102838231704&q=${query}&days=10&aqi=no&alerts=no`);
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
  reducers: {
    ForecastDetails: (state, action) => {
      const date = action.payload;
      const forecastDetails = state.forecastDetails[date];
      return forecastDetails || null;
    },
  },
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
          country: location.country,
          region: location.region,
          continent: location.tz_id,
        };
        state.conditions = {
          last_updated: current.last_updated,
          temp_c: current.temp_c,
          cloud: current.cloud,
          humidity: current.humidity,
          text: current.condition.text,
          icon: current.condition.icon,
          wind_mph: current.wind_mph,
        };
        state.forecast = forecast.forecastday.map((fcast) => ({
          id: uuidv4(),
          date: fcast.date,
          text: fcast.day.condition.text,
          icon: fcast.day.condition.icon,
        }));

        state.forecastDetails = forecast.forecastday.reduce((acc, fcast) => ({
          ...acc,
          [fcast.date]: {
            maxtemp: fcast.day.maxtemp_c,
            mintemp: fcast.day.mintemp_c,
            avgtemp: fcast.day.avgtemp_c,
            avghumidity: fcast.day.avghumidity,
            rain: fcast.day.daily_chance_of_rain,
            snow: fcast.day.daily_chance_of_snow,
            text: fcast.day.condition.text,
            icon: fcast.day.condition.icon,
          },
        }), {});
      })
      .addCase(fetchWeatherCondtions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
      });
  },
});

export const { ForecastDetails } = weatherSlice.actions;
export default weatherSlice.reducer;
