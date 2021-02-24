import { getWeatherData } from "./weatherEngine";

const topics = ["weather"];

const topicAssociatedWords = {
  weather: ["weather", "hot", "cold", "warm", "temperature"],
};

export const processQuestion = async (query: string) => {
  let answer = "I don't know how to answer your question";
  const words = query
    .split(" ")
    .map((word) =>
      word
        .replace(/[^A-Za-z\s]/g, "")
        .replace(/\s+/g, " ")
        .trim()
        .toLowerCase()
    )
    .filter((word) => word);

  const topic = findTopic(words);
  switch (topic) {
    case Topics.Weather:
      answer = await getWeatherData(words);
      break;
    default:
    // unknown topic
  }
  return answer;
};

function findTopic(words: string[]) {
  for (const word of words) {
    for (const topic of topics) {
      if (topicAssociatedWords[topic].includes(word)) return topic;
    }
  }
  return null;
}

enum Topics {
  Weather = "weather",
}
