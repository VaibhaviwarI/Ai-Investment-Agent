const express = require("express");
const cors = require("cors");
require("dotenv").config();
const analyzeRoute = require("./routes/analyze");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/analyze", analyzeRoute);

app.get("/", (req, res) => {
    res.send("Investment Agent Running 🚀");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});