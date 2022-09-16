import React from "react";

// Librairies
import { Typography } from "@mui/material";
import { Opacity, Air, TireRepair } from "@mui/icons-material";
import clsx from "clsx";

// Components
import Card from "../../components/base/Card";

// Hooks
import { useAppSelector } from "../../hooks/redux";
import { selectWeather } from "../../selectors/weather";

// Styles
import { useStyles } from "./style";

// utils
const getIconUrl = (icon: string): string => {
  return `http://openweathermap.org/img/w/${icon}.png`;
};

interface IProps {}

const WeatherComponent: React.FC<IProps> = () => {
  const {
    main: mainData,
    name,
    weather,
    wind,
    sys,
  } = useAppSelector(selectWeather);
  const [{ icon, description, main }] = weather;
  const imageURL = icon && getIconUrl(icon);
  const classes = useStyles();

  return (
    <Card title={name}>
      <div className="flexRowSpaceBetweenCenter">
        <div className={clsx("flexRowAlignCenter", classes.subHeader)}>
          {imageURL && (
            <img src={imageURL} alt={description} width={80} height={80} />
          )}
          <div>
            <Typography variant="h4"> {mainData?.temp}°C </Typography>
            <Typography variant="body2"> {main} </Typography>
            <Typography variant="body2"> {description} </Typography>
          </div>
        </div>
        <div>
          <Typography>
            {" "}
            <strong>Sunrise</strong>{" "}
            {sys?.sunrise && new Date(sys?.sunrise).toLocaleTimeString()}{" "}
          </Typography>
          <Typography>
            {" "}
            <strong>Sunset</strong>{" "}
            {sys?.sunrise && new Date(sys?.sunset).toLocaleTimeString()}{" "}
          </Typography>
        </div>
      </div>
      <div className={clsx(classes.infoWrapper, "flexRowAlignCenter")}>
        <Opacity fontSize="small" className={classes.icon} />
        <Typography variant="h6" className={classes.typography}>
          Humidity
        </Typography>
        <Typography variant="body2"> {mainData?.humidity}% </Typography>
      </div>
      <div className={clsx(classes.infoWrapper, "flexRowAlignCenter")}>
        <Air fontSize="small" className={classes.icon} />
        <Typography variant="h6" className={classes.typography}>
          Wind
        </Typography>
        <Typography variant="body2"> {wind?.speed}km/s </Typography>
      </div>
      <div className={clsx(classes.infoWrapper, "flexRowAlignCenter")}>
        <TireRepair fontSize="small" className={classes.icon} />
        <Typography variant="h6" className={classes.typography}>
          Pressure
        </Typography>
        <Typography variant="body2"> {mainData?.pressure} </Typography>
      </div>
    </Card>
  );
};

export default WeatherComponent;
