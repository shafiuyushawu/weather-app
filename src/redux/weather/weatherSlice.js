import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import client from '../api/client';
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
      const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=fbb346f734f2486bb3c102838231704&q=${query}&days=8&aqi=no&alerts=no`);
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(`Error: ${error}`);
    }
  },
); (
  <div className="bg-gradient-to-tl from-green-900 to-blue-700 h-52 w-full  relative">
    <img
      src="sads"
      alt="back"
      className="w-full h-full object-cover absolute mix-blend-overlay"
    />
    <div className="">
      <h2 className="text-white font-bold text-4xl text-right ">
        selected
      </h2>
    </div>
  </div>
);

const weatherSlice = createSlice({
  initialState,
  name: 'weather',
  reducers: {
    ForecastDetails: (state, action) => {
      const date = action.payload;
      console.log(date);
      const forecastDetails = state.forecastDetails[date];
      console.log(forecastDetails);
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
          maxtemp_c: fcast.day.maxtemp_c,
          mintemp_c: fcast.day.mintemp_c,
          avgtemp_c: fcast.day.avgtemp_c,
          avghumidity: fcast.day.avghumidity,
          daily_chance_of_rain: fcast.day.daily_chance_of_rain,
          daily_chance_of_snow: fcast.day.daily_chance_of_snow,
          text: fcast.day.condition.text,
          icon: fcast.day.condition.icon,
        }));

        state.forecastDetails = forecast.forecastday.reduce((acc, fcast) => ({
          ...acc,
          [fcast.date]: {
            maxtemp_c: fcast.day.maxtemp_c,
            mintemp_c: fcast.day.mintemp_c,
            avgtemp_c: fcast.day.avgtemp_c,
            avghumidity: fcast.day.avghumidity,
            daily_chance_of_rain: fcast.day.daily_chance_of_rain,
            daily_chance_of_snow: fcast.day.daily_chance_of_snow,
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
