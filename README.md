# Virtual Assistant Experiment

This project is a quick and dirty "Alexa" experiment with Node 14 (LTS) and Typescript.

## Quick Start

Copy .env.example and create a .env file and setup the credentials there. Then:

```
npm i
```

Now, to ask a question you can either do it through the browser:

```
npm start
```

[http://localhost:3000/?q=What is the weather in London?](http://localhost:3000/?q=What%20is%20the%20weather%20in%20London%3F)

Or directly using the CLI, for example:

```
npm run ask "What is the weather in London?"
```

## Tests

There are unit and integration tests. Just run:

```
npm test
```
