

const express = require('express');
const app = express();
const path = require("path");

app.set("view engine","ejs");
app.set("views","./src/views");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"../public")));

const indexRouter = require('./routes/index.routes');

app.use('/', indexRouter);

module.exports = app;
