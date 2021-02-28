const API = "http://api.ipstack.com";
const ACCESS_KEY = process.env.IPSTACK_ACCESS_KEY;

import fetch from "node-fetch";
import { IPStackLocation } from "./ipstack.types";

export const getLocation = async (ipAddress: string) => {
  const location: IPStackLocation = await fetch(
    `${API}/${ipAddress}?access_key=${ACCESS_KEY}`
  ).then((res) => res.json());
  return location;
};
