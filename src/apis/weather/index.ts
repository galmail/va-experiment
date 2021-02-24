import * as metaWeatherApi from "./metaWeather";
import { MetaWeather } from "./metaWeather.types";
import { GeoLocation } from "../ip2location";

const callMetaWeatherApi = (apiFn) => async (
  cityOrGeoLocation: CityOrLocation
) => {
  const weather = await apiFn(cityOrGeoLocation);
  if (!weather) return null;
  return new Weather(weather);
};

export const queryByLocation = callMetaWeatherApi(
  metaWeatherApi.queryByLocation
);
export const queryByGeoLocation = callMetaWeatherApi(
  metaWeatherApi.queryByGeoLocation
);

type CityOrLocation = string | GeoLocation;

class Weather {
  state: string;
  minTemp: number;
  maxTemp: number;

  constructor(weather: MetaWeather) {
    this.state = weather.weather_state_name;
    this.minTemp = Math.round(weather.min_temp);
    this.maxTemp = Math.round(weather.max_temp);
  }
}
