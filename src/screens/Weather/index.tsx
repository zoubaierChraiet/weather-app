import React, { useEffect, useState } from "react";

// Librairies
import { CircularProgress, Typography } from "@mui/material";

// Components
import Form from "../../components/form";
import Weather from "../../components/weather";

// Store
import { getWeather } from "../../features/weather/weatherSlice";

// Hooks
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { selectResponseStatus } from "../../selectors/weather";

interface IProps {}

const WeatherScreen: React.FC<IProps> = () => {
  const [weatherState, setWeatherState] = useState(() => ({
    searchText: "",
    errorMessage: "",
  }));
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectResponseStatus);

  useEffect(() => {
    if (status === "failed") {
      setWeatherState((ws) => ({
        ...ws,
        errorMessage: "Please search for a valid city",
      }));
    } else {
      setWeatherState((ws) => ({ ...ws, errorMessage: "" }));
    }
  }, [status]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeatherState({ ...weatherState, searchText: event.target.value });
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    event.preventDefault();
    dispatch(getWeather(weatherState.searchText));
    setWeatherState({ ...weatherState, searchText: "" });
  };

  return (
    <div>
      <Typography variant="h2" gutterBottom>Simple Weather App</Typography>
      <Form
        errorMessage={weatherState.errorMessage}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
        value={weatherState.searchText}
      />
      {status === "loading" && <CircularProgress />}
      {status === "loaded" && <Weather />}
    </div>
  );
};

export default WeatherScreen;
