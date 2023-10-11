const express = require("express");

const captainLogs = express.Router();

const captainLogsData = require("../model/captainsLogs");

captainLogs.get("/", (req, res) => {
    console.log("Sending all captain log data")

    res.json(captainLogsData)
})