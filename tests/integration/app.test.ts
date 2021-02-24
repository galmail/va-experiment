import { answer } from "../../src/app";

describe("app", () => {
  it("answers: what's the weather like in London?", async () => {
    const q = "what's the weather like in London?";
    const theAnswer = await answer(q);
    expect(theAnswer).toMatch(/The current weather in London is/i);
  });

  it("answers: is it hot in Madrid?", async () => {
    const q = "is it hot in Madrid?";
    const theAnswer = await answer(q);
    expect(theAnswer).toMatch(/The current weather in Madrid is/i);
  });

  it("answers: how cold is in Alaska?", async () => {
    const q = "how cold is in Alaska?";
    const theAnswer = await answer(q);
    expect(theAnswer).toMatch(/I can only find the weather for/i);
  });
});
