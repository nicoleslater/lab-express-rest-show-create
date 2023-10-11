const express = require("express")

const captainLogs = require("./controllers/captainLogsController");

const app = express();

app.use(express.json());

app.use("/logs", captainLogs);

app.get("/", (req, res) => {
    res.send(`Welcome to Our Express App.`);
})

app.get("*", (req, res) => {
    res.status(404).json({error: "no page is found"})
})

// res.redirect()

module.exports = app;