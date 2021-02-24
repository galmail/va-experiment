import { getLocationByIP } from "../../src/apis/ip2location";
import * as ipstackApi from "../../src/apis/ip2location/ipstack";

describe("ipstack api", () => {
  it("get location for IP: 90.247.92.31", async () => {
    const ipAddress = "90.247.92.31";
    spyOn(ipstackApi, "getLocation").and.returnValue(
      Promise.resolve({
        ip: ipAddress,
        latitude: 123,
        longitude: 456,
        city: "City",
        region_name: "Region",
        country_name: "Country",
      })
    );
    const location = await getLocationByIP(ipAddress);
    expect(ipstackApi.getLocation).toHaveBeenCalledWith(ipAddress);
  });
});
