require("dotenv").config();
const express = require("express");

const apiRouter = require("./api-router.js");
const configuredMiddleware = require("./configuredMiddleware.js");

const server = express();

configuredMiddleware(server);
server.use("/api", apiRouter);

module.exports = server;
