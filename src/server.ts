import express from "express";
import { answer } from "./app";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const question = req.query?.q;
  const example = "What is the weather in London?";
  if (!question) {
    res.send(`
      Hi! you can ask me a question, for example:
      <a href="/?q=${encodeURIComponent(example)}">${example}</a>
    `);
  } else {
    answer(String(question))
      .then((theAnswer) => {
        res.send(theAnswer);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send(err.message);
      });
  }
});

app.listen(port, () => {
  return console.log(`Server is listening on port ${port}`);
});
