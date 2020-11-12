// Main starting point of the application
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const router = require("./router");
const mongoose = require("mongoose");
const cors = require("cors");

// DB setup
mongoose.connect("mongodb://localhost:27017/auth", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// App Setup
// Allows requests from anywhere
app.use(cors());

// Middlewares
// Morgan is a logging framework
app.use(morgan("combined"));
// Body-parser parses incoming requests, specifically parsing them into json. Accepting any request
app.use(bodyParser.json({ type: "*/*" }));

router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
