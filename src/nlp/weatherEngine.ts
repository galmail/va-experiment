import * as ip from "what-is-my-ip-address";
import { queryByLocation, queryByGeoLocation } from "../apis/weather";
import { getLocationByIP } from "../apis/ip2location";
import { knownPlaces } from "../consts";

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
    with min temp of ${weather.minTemp} degrees and max temp of ${weather.maxTemp} degrees
  `;
};

async function findLocation(words) {
  const composedWords = handleComposedPlaces(words);
  for (const place of knownPlaces) {
    if (composedWords.includes(place.toLowerCase())) {
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

// for example: New York is a composed word, so we want to join them together
// at the moment, we handle only 2 composed words
function handleComposedPlaces(words: string[]) {
  const composedWords = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const placeIdx = knownPlaces.findIndex((place) =>
      place.toLowerCase().includes(word)
    );
    if (placeIdx < 0) {
      composedWords.push(word);
      continue;
    }
    const nextWord = words[i + 1];
    const currentPlace = knownPlaces[placeIdx];
    if (
      !nextWord ||
      !currentPlace.toLowerCase().includes(nextWord.toLowerCase())
    ) {
      composedWords.push(word);
      continue;
    }
    // the place is composed
    composedWords.push(currentPlace.toLowerCase());
    i++; // skip the next word
  }
  return composedWords;
}
