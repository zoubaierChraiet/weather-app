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
