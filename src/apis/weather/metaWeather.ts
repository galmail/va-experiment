const API = "https://www.metaweather.com/api/location";

import fetch from "node-fetch";
import { MetaLocation, MetaWeather } from "./metaWeather.types";

export const queryByLocation = async (query: string): Promise<MetaWeather> => {
  const locations: [MetaLocation] = await fetch(
    `${API}/search/?query=${encodeURIComponent(query)}`
  ).then((res) => res.json());
  return await getWeatherByLocations(locations);
};

export const queryByGeoLocation = async (geoLocation): Promise<MetaWeather> => {
  const { latitude, longitude } = geoLocation;
  const locations: [MetaLocation] = await fetch(
    `${API}/search/?lattlong=${latitude},${longitude}`
  ).then((res) => res.json());
  return await getWeatherByLocations(locations);
};

async function getWeatherByLocations(locations: [MetaLocation]) {
  if (!locations || !locations[0]) throw new Error("Location not found!");
  const { woeid } = locations[0];
  if (!woeid) throw new Error("Where On Earth ID missing!");
  const location: MetaLocation = await fetch(`${API}/${woeid}`).then((res) =>
    res.json()
  );
  const weather: MetaWeather =
    location?.consolidated_weather && location?.consolidated_weather[0];
  return weather;
}
