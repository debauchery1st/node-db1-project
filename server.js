const express = require("express");
const helmet = require("helmet");
const server = express();

const accountsRouter = require("./routers/accounts");

server.use(express.json());
server.use(helmet());

server.get("/", (req, res) => {
  res.status(200).send("hi");
});

server.use("/api/accounts", accountsRouter);

module.exports = server;
