const express = require("express");
const app = express();

const { quotes } = require("./data");
const { getRandomElement } = require("./utils");

const quoter = require("./quoter");
const req = require("express/lib/request");

const PORT = process.env.PORT || 4001;

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log("Started on port: " + PORT);
  //console.log(quotes);
});

//console.log(quotes);

//app.use("/quotes", quotesRouter);
//console.log(getRandomElement(quotes));

app.get("/api/quotes/", (req, res, next) => {
  res.send(quotes);
});

app.get("/api/quotes/:person", (req, res, next) => {
  const newQuotes = quotes.filter((quote) => {
    return quote.person === req.params.person;
  });

  res.send(newQuotes);
});

app.get("/api/quotes/random", (req, res, next) => {
  res.send(getRandomElement(quotes));
});

app.post("/api/quotes", (req, res, next) => {
  if (req.query.person && req.query.quote) {
    quotes.push(req.query);
    //res.send(quotes);
    res.status(201).send(quotes);
  } else {
    res.status(400).send("Bad requester!");
  }
});
