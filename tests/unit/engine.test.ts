import { processQuestion } from "../../src/nlp/engine";
import * as weatherEngine from "../../src/nlp/weatherEngine";

describe("nlp engine", () => {
  it("process query which includes weather topic", async () => {
    const q = "what's the weather in Madrid?";
    spyOn(weatherEngine, "getWeatherData").and.returnValue(
      Promise.resolve("The current weather in Madrid is...")
    );
    const theAnswer = await processQuestion(q);
    expect(weatherEngine.getWeatherData).toHaveBeenCalled();
  });
});
