import React, { useState } from "react";

// Librairies
import Button from "../../components/base/Button";
import Input from "../../components/base/Input";

// Store
import { getWeather } from "../../features/weather/weatherSlice";

// Hooks
import { useAppDispatch } from "../../hooks/redux";

interface IProps {}

const WeatherScreen: React.FC<IProps> = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useAppDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSearchClick = () => {
    dispatch(getWeather(searchText));
  };

  return (
    <div>
      <Input value={searchText} onChange={handleInputChange} type={"text"} />
      <Button label="Get weather" onClick={handleSearchClick} />
    </div>
  );
};

export default WeatherScreen;
