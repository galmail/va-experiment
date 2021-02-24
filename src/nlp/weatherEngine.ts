import * as ip from "what-is-my-ip-address";
import { queryByLocation, queryByGeoLocation } from "../apis/weather";
import { getLocationByIP } from "../apis/ip2location";

const knownPlaces = ["London", "New York", "Paris", "Madrid", "Tel Aviv"];

export const getWeatherData = async (words: string[]) => {
  let city = await findLocation(words);
  const geoLocation = await findCurrentGeoLocation();
  let weather;
  if (city) {
    weather = await queryByLocation(city);
  } else if (geoLocation) {
    weather = await queryByGeoLocation(geoLocation);
    city = "your location";
  } else {
    return `I can only find the weather for ${knownPlaces.join(", ")}`;
  }

  if (!weather) return `I couldn't find the weather report for ${city}`;

  return `
    The current weather in ${city} is ${weather.state}
    with min temp of ${weather.minTemp} and max temp of ${weather.maxTemp}
  `;
};

async function findLocation(words) {
  for (const place of knownPlaces) {
    if (words.includes(place.toLowerCase())) {
      return Promise.resolve(place);
    }
  }
  return null;
}

async function findCurrentGeoLocation() {
  const ipv4 = await ip.v4();
  const getLocation = await getLocationByIP(ipv4);
  return getLocation;
}
