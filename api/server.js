const express = require("express");

const Hobbits = require("../hobbits/hobbitsModel.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/hobbits", (req, res) => { // endpoint with supertest
  Hobbits.getAll() // db helpers jest
    .then(hobbits => {
      res.status(200).json(hobbits);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;
