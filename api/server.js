const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// Database
const usersRouter = require('./users/users-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(
    cors({
        origin: "*",
        credentials: true,
    })
);

server.get("/", (req, res) => {
    res.status(200).json({ server: "GAME Back End, Up and running..." });
});

// Users Routes
server.use('/api', usersRouter);


module.exports = server;