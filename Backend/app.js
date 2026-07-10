const express = require("express");
const cors = require("cors");
require("dotenv").config();
const analyzeRoute = require("./routes/analyze");

const app = express();

// Allow requests from any origin (handles Vercel frontend domain)
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());
app.use("/analyze", analyzeRoute);

app.get("/", (req, res) => {
    res.send("Investment Agent Running 🚀");
});

// Only listen locally — Vercel handles this automatically in serverless mode
if (process.env.NODE_ENV !== "production") {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;