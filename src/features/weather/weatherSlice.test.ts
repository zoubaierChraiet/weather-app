import weatherReducer, {
  getWeatherData,
  WeatherState,
} from "./weatherSlice";

describe("counter reducer", () => {
  const initialState: WeatherState = {
    main: null,
    name: "",
    status: "idle",
    sys: null,
    weather: [],
    wind: null,
  };
  it("should handle initial state", () => {
    expect(weatherReducer(undefined, { type: "unknown" })).toEqual({
      main: null,
      name: "",
      status: "idle",
      sys: null,
      weather: [],
      wind: null,
    });
  });

  it("should handle state change", () => {
    const actual = weatherReducer(
      initialState,
      getWeatherData({
        main: null,
        name: "tunisia",
        status: "loaded",
        sys: null,
        weather: [],
        wind: null,
      })
    );
    expect(actual.name).toEqual("tunisia");
    expect(actual.status).toEqual("loaded");
  });
});
