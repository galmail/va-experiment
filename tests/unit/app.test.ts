import { answer } from "../../src/app";

describe("app", () => {
  it("answers a question", async () => {
    const q = "how is it going??";
    const theAnswer = await answer(q);
    expect(theAnswer).toMatch(/not ready yet to answer your question/i);
  });
});
