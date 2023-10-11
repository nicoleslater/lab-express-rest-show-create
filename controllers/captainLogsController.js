const express = require("express");

const captainLogs = express.Router();

const captainLogsData = require("../model/log");

captainLogs.get("/", (req, res) => {
    console.log("Sending all captain log data")

    res.json(captainLogsData);
})


captainLogs.get("/:index", (req, res) => {
    const {index} = req.params;
    console.log("Show ROUTE!!!!!!!!")

    if (captainLogsData[index]){
        res.status(200).json(captainLogsData[index])
    } else {
        res.status(404).send("No log at that index");
    }
})


captainLogs.post("/", (req, res) => {
    console.log("Post Route was HIT!")
    console.log(req.body, "<<<<<-----")
    captainLogsData.push(req.body);
    res.status(200).json({ status: "OK", payload: captainLogsData[captainLogsData.length - 1]})
})

module.exports = captainLogs;