const express = require("express")

const captainLogs = require("./controllers/captainLogsController");

const app = express();

app.use(express.json());

app.use("/logs", captainLogs);

app.get("/", (req, res) => {
    res.send(`Welcome to Our Express App.`);
})

app.get("/404", (req, res) => {
    res.send("Error")
})

// res.redirect()

module.exports = app;