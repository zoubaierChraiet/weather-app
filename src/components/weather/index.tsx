import React from "react";

// Librairies
import { Typography } from '@mui/material';

// Components
import Card from "../../components/base/Card";

// Hooks
import { useAppSelector } from "../../hooks/redux";
import { selectWeather } from "../../selectors/weather";

interface IProps {}

const WeatherComponent: React.FC<IProps> = () => {
  const { main, name, weather, wind } = useAppSelector(selectWeather);
  const [weatherData] = weather;

  return (
    <Card title={name}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Typography variant="h6"> Tempeture </Typography>
        <Typography variant="body2"> {main?.temp}° </Typography>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Typography variant="h6"> Humidity </Typography>
        <Typography variant="body2"> {main?.humidity}% </Typography>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Typography variant="h6"> Wind </Typography>
        <Typography variant="body2"> {wind?.speed}km/s </Typography>
      </div>
    </Card>
  );
};

export default WeatherComponent;
