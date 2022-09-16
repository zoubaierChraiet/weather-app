// Librairies
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types
import { IWeather, IMain, IWind, ISystem } from "../DataTypes";

// Calls
import { fetchWeather } from "./calls";

export interface WeatherState {
  status: "idle" | "loading" | "failed" | "loaded";
  weather: IWeather[];
  name: string;
  main: IMain | null;
  wind: IWind | null;
  sys: ISystem | null;
}

const initialState: WeatherState = {
  status: "idle",
  main: null,
  name: '',
  weather: [],
  wind: null,
  sys: null,
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
      state.status = action.payload.status;
      state.weather = action.payload.weather;
      state.name = action.payload.name;
      state.wind = action.payload.wind;
      state.sys = action.payload.sys;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getWeather.fulfilled, (state, action: PayloadAction<WeatherState>) => {
        state.status = "loaded";
        state.main = action.payload.main;
        state.weather = action.payload.weather;
        state.name = action.payload.name;
        state.wind = action.payload.wind;
        state.sys = action.payload.sys;
      })
      .addCase(getWeather.rejected, (state) => {
        state.status = "failed";
        state.main = initialState.main;
        state.weather = initialState.weather;
        state.name = initialState.name;
        state.wind = initialState.wind;
        state.sys = initialState.sys;
      });
  },
});

export const { getWeatherData } = counterSlice.actions;

export default counterSlice.reducer;
