export interface MetaLocation {
  title: string;
  location_type?: string;
  latt_long: `${number},${number}`;
  woeid: number;
  distance?: number;
  consolidated_weather?: [MetaWeather];
}

export interface MetaWeather {
  id: number;
  weather_state_name: string;
  min_temp: number;
  max_temp: number;
  the_temp: number;
  applicable_date: string;
}
