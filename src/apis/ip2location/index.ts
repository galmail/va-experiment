import * as ipstackApi from "./ipstack";
import { IPStackLocation } from "./ipstack.types";

export const getLocationByIP = async (ip: string): Promise<GeoLocation> => {
  const location: IPStackLocation = await ipstackApi.getLocation(ip);
  if (!location) return null;
  return new GeoLocation(location);
};

export class GeoLocation {
  latitude: number;
  longitude: number;

  constructor(location: IPStackLocation) {
    this.latitude = location.latitude;
    this.longitude = location.longitude;
  }
}
