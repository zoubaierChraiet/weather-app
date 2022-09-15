import { RootState } from "../redux/store";

export const selectWeather = (state: RootState) => state.weather;