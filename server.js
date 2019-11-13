const express = require("express");
const helmet = require("helmet");

const AnimalsRouter = require("./animals/animals-router");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/animals", AnimalsRouter);

module.exports = server;
