import { getWeatherData } from "../../src/nlp/weatherEngine";
import * as weatherApi from "../../src/apis/weather";

describe("weatherEngine", () => {
  it("getWeatherData", async () => {
    spyOn(weatherApi, "queryByLocation").and.returnValue(
      Promise.resolve({
        state: "Heavy Cloud",
        minTemp: 11,
        maxTemp: 14,
      })
    );
    const q = "what's the weather in Paris ?";
    const theAnswer = await getWeatherData(
      q.split(" ").map((word) => word.toLowerCase())
    );
    expect(weatherApi.queryByLocation).toHaveBeenCalledWith("Paris");
    expect(theAnswer).toContain("Heavy Cloud");
    expect(theAnswer).toContain("min temp of 11");
    expect(theAnswer).toContain("max temp of 14");
  });
});
