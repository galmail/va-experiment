const API = "https://www.metaweather.com/api/location";

import fetch from "node-fetch";

export const queryByLocation = async (query: string) => {
  const locations: [Location] = await fetch(
    `${API}/search/?query=${encodeURIComponent(query)}`
  ).then((res) => res.json());
  if (!locations || !locations[0]) throw new Error("Location not found!");
  const { woeid } = locations[0];
  if (!woeid) throw new Error("Where On Earth ID missing!");
  const location: Location = await fetch(`${API}/${woeid}`).then((res) =>
    res.json()
  );
  return location;
};

interface Location {
  title: string;
  location_type?: string;
  latt_long: `${number},${number}`;
  woeid: number;
  distance?: number;
  consolidated_weather?: [Weather];
}

interface Weather {
  id: number;
  weather_state_name: string;
  min_temp: number;
  max_temp: number;
  the_temp: number;
  applicable_date: string;
}
