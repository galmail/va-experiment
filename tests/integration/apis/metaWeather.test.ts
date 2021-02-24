import { queryByLocation } from "../../../src/apis/metaWeather";

describe("metaWeather api", () => {
  it("queryByLocation in London", async () => {
    const location = await queryByLocation("London");
    expect(location.consolidated_weather.length).toBeGreaterThan(0);
  });

  it("queryByLocation in New York", async () => {
    const location = await queryByLocation("New York");
    expect(location.consolidated_weather.length).toBeGreaterThan(0);
  });

  it("queryByLocation in Madrid", async () => {
    const location = await queryByLocation("Madrid");
    expect(location.consolidated_weather.length).toBeGreaterThan(0);
  });

  it("queryByLocation using invalid location", async () => {
    let location;
    try {
      location = await queryByLocation("Jupiter");
    } catch (err) {
      expect(err.message).toMatch(/location not found/i);
    }
    expect(location).toBeUndefined();
  });
});
