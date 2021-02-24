import { answer } from "./app";

const question = process.argv[process.argv.length - 1];

console.log("Processing: ", question);

answer(question)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err.message);
  });
