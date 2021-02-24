import * as metaWeatherApi from "./metaWeather";
import { MetaWeather } from "./metaWeather.types";

export const queryByLocation = async (query): Promise<Weather> => {
  const weather = await metaWeatherApi.queryByLocation(query);
  if (!weather) return null;
  return new Weather(weather);
};

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
