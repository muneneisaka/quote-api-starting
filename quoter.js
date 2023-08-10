const express = require("express");
const data = require("./data");

const quotesRouter = express.Router();

quotesRouter.get("/", (req, res, next) => {
  return data.quotes;
});
