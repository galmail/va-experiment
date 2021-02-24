import { processQuestion } from "./nlp/engine";

export const answer = async (question: string): Promise<string> => {
  return await processQuestion(question);
  // return Promise.resolve(
  //   `I'm a newbie! not ready yet to answer your question: ${question}`
  // );
};
