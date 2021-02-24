import { queryByLocation } from "../../src/apis/weather/metaWeather";

describe("metaWeather api", () => {
  it("queryByLocation in London", async () => {
    const weather = await queryByLocation("London");
    expect(weather).toBeTruthy();
  });

  it("queryByLocation in New York", async () => {
    const weather = await queryByLocation("New York");
    expect(weather).toBeTruthy();
  });

  it("queryByLocation using invalid location", async () => {
    let weather;
    try {
      weather = await queryByLocation("Jupiter");
    } catch (err) {
      expect(err.message).toMatch(/location not found/i);
    }
    expect(weather).toBeUndefined();
  });
});
