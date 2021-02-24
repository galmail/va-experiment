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

  it("responds politely when it doesn't know the answer", async () => {
    const q = "are there any aliens?";
    spyOn(weatherEngine, "getWeatherData").and.returnValue(
      Promise.resolve("this shouldn't even be called!")
    );
    const theAnswer = await processQuestion(q);
    expect(weatherEngine.getWeatherData).not.toHaveBeenCalled();
    expect(theAnswer).toMatch(
      /Sorry, I don't know how to answer your question/i
    );
  });
});
