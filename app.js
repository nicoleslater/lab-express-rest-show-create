const express = require("express")

const captainLogs = require("./controllers/captainLogsController");

const app = express();

app.use(express.json());
app.use("/captainLogs", captainLogs);

app.get("/", (req, res) => {
    res.send(`Welcome to Our Express App.`);
})