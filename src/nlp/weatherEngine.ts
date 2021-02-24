import { queryByLocation } from "../apis/weather";

const knownPlaces = ["London", "New York", "Paris", "Madrid", "Tel Aviv"];

export const getWeatherData = async (words: string[]) => {
  const city = findLocation(words);
  if (!city) return `I can only find the weather for ${knownPlaces.join(", ")}`;
  const weather = await queryByLocation(city);
  if (!weather) return `I couldn't find the weather report for ${city}`;

  return `
    The current weather in ${city} is ${weather.state}
    with min temp of ${weather.minTemp} and max temp of ${weather.maxTemp}
  `;
};

function findLocation(words) {
  for (const place of knownPlaces) {
    if (words.includes(place.toLowerCase())) {
      return place;
    }
  }
  return null;
}
