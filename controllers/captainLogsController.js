const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const captainLogs = express.Router();

const captainLogsData = require("../model/log");

captainLogs.post("/", (req, res) => {
    console.log("Post Route was HIT!")
    console.log(req.body, "<<<<<-----")
    captainLogsData.push(req.body);
    // captainLogsData.sort((a,b) => a.logMessage.localeCompare(b.logMessage));
    res.status(200).json({ status: "OK", payload: captainLogsData[captainLogsData.length - 1]})
});

captainLogs.get("/", (req, res) => {
    console.log("Sending all captain log data")

    res.json(captainLogsData);
});

// captainLogs.post("/", (req, res) => {
//     const newLog = req.body;
//     console.log(newLog)
//     captainLogsData.push(newLog);
//     res.status(200).json(newLog);
// })


captainLogs.get("/:index", (req, res) => {
    const {index} = req.params;
    console.log("Show ROUTE!!!!!!!!")

    if (captainLogsData[index]){
        res.status(200).json(captainLogsData[index])
    } else {
        res.status(404).send("No log at that index");
    }
});


// captainLogs.post("/", (req, res) => {
//     console.log("Post Route was HIT!")
//     console.log(req.body, "<<<<<-----")
//     captainLogsData.push(req.body);
//     // captainLogsData.sort((a,b) => a.logMessage.localeCompare(b.logMessage));
//     res.status(200).json({ status: "OK", payload: captainLogsData[captainLogsData.length - 1]})
// });

// captainLogs.post("/logs?order=asc", (req, res) => {
//     console.log(" Ascending Order ---->>> !!!")

//     captainLogsData.push(req.body);

//     const newLog = captainLogsData.sort((a,b) => a.logMessage.localeCompare(b.logMessage));
//     res.send(newlog)
// })

// captainLogs.post("/logs?order=desc", (req, res) => {
//     console.log("Descending Order ====>")

//     captainLogsData.push(req.body);

//     captainLogsData.sort((a,b) => b.logMessage.localeCompare(a.logMessage));
// })

//  splice changes the array and returns the item that was removed in a new array 
captainLogs.delete("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params;

    if (captainLogsData[arrayIndex]){
        
        const deletedLog = captainLogsData.splice[arrayIndex, 1];
        res.status(200).json(deletedLog[0]);
    } else {
        res.redirect(404);
    }

  
});
// Update Route - localhost:4444/logs/:id
captainLogs.put("/:arrayIndex", (req, res) => {
console.log("UPDATED ROUTE ---->>>>>")
    const { arrayIndex } = req.params;

    if(captainLogsData[arrayIndex]){
        captainLogsData[arrayIndex] = req.body
    res.status(200).json((captainLogsData[arrayIndex]));
    } else {
        res.redirect(404);
    }
   
});


module.exports = captainLogs;