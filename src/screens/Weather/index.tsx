import React, { useEffect, useState } from "react";

// Librairies
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
  const status = useAppSelector(selectResponseStatus)

  useEffect(() => {
    if(status === 'failed') {
      setWeatherState({...weatherState, errorMessage: "Please search for a valid city"})
    } else {
      setWeatherState({...weatherState, errorMessage: ""})
    }
  }, [status])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeatherState({ ...weatherState, searchText: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(getWeather(weatherState.searchText));
    setWeatherState({ ...weatherState, searchText: "" });
  };

  return (
    <div>
      <Form
        errorMessage={weatherState.errorMessage}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
        value={weatherState.searchText}
      />
      {status === 'idle' && <Weather />}
    </div>
  );
};

export default WeatherScreen;
