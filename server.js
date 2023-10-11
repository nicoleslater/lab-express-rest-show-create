const app = require("./app.js");

require("dotenv").config();

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
    console.log(`WE are LIVE on the Port: ${PORT}`)
})