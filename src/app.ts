import env from "dotenv";
env.config();

import { processQuestion } from "./nlp/engine";

export const answer = async (question: string): Promise<string> => {
  return await processQuestion(question);
};
