const express = require("express");

const captainLogs = express.Router();

const captainLogsData = require("../model/log");

captainLogs.get("/", (req, res) => {
    console.log("Sending all captain log data")

    res.json(captainLogsData)
})

module.exports = captainLogs;