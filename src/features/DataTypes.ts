export type IWeather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type IMain = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
};

export type IWind = {
  speed: number;
  deg: number;
};

export type ISystem = {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
};