export const answer = (question: string): Promise<string> => {
  return Promise.resolve(
    `I'm a newbie! not ready yet to answer your question: ${question}`
  );
};
