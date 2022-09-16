import { RootState } from "../redux/store";

export const selectWeather = (state: RootState) => state.weather;

export const selectResponseStatus = (state: RootState) => state.weather.status;