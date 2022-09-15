import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWeather, IMain } from "../DataTypes";
import { fetchWeather } from "./calls";

export interface WeatherState {
  status: "idle" | "loading" | "failed";
  weather: IWeather[];
  name: string;
  main: IMain | null
}

const initialState: WeatherState = {
  status: "idle",
  main: null,
  name: '',
  weather: [],
};

export const getWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city: string) => {
    const response = await fetchWeather(city);
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getWeatherData: (state, action: PayloadAction<WeatherState>) => {
      state.main = action.payload.main;
      state.weather = action.payload.weather;
      state.name = action.payload.name;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.status = "idle";
        state.main = action.payload.main;
        state.weather = action.payload.weather;
        state.name = action.payload.name;
      })
      .addCase(getWeather.rejected, (state) => {
        state.status = "failed";
        state.main = initialState.main;
        state.weather = initialState.weather;
        state.name = initialState.name;
      });
  },
});

export const { getWeatherData } = counterSlice.actions;

export default counterSlice.reducer;
