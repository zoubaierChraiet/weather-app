import Api from "../api";

export const fetchWeather = async (city: string) => {
  return await Api.get("/weather", {
    params: {
      q: city,
      appid: "f825344b0cf0672c689378549f9868db",
    },
  });
};
