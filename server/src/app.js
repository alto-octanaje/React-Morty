const express = require("express");
const morgan = require("morgan");
const mainRouter = require("./router/mainRouter");

const app = express();

app.use(morgan("env"));
app.use(express.json())
app.use(mainRouter);

module.exports = app;
