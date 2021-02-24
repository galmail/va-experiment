import { queryByLocation } from "../../src/apis/weather";

describe("weather api", () => {
  it("queryByLocation in London", async () => {
    const weather = await queryByLocation("London");
    expect(weather.state).toBeTruthy();
    expect(weather.minTemp).toBeTruthy();
    expect(weather.maxTemp).toBeTruthy();
  });

  it("queryByLocation using invalid location", async () => {
    let weather;
    try {
      weather = await queryByLocation("Another Universe");
    } catch (err) {
      expect(err.message).toMatch(/location not found/i);
    }
    expect(weather).toBeUndefined();
  });
});
