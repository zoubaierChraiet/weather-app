import React, { useState } from "react";
import { getWeather, getWeatherData } from "../../../features/weather/weatherSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { selectWeather } from "../../../selectors/weather";

// Hooks

interface IProps {}

const InputComponent: React.FC<IProps> = () => {
  const [searchText, setSearchText] = useState("");
  const { main, name, status, weather } = useAppSelector(selectWeather);
  const dispatch = useAppDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  }

  const handleSearchClick = () => {
    dispatch(getWeather(searchText))
  }

  return <div>
    <input type="text" name="search" value={searchText} onChange={handleInputChange} />
    <button onClick={handleSearchClick}>search weather</button>
  </div>;
};

export default InputComponent;
