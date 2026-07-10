const express = require("express");
const cors = require("cors");
require("dotenv").config();
const analyzeRoute = require("./routes/analyze");

const app = express();

const corsOptions = {
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
};

// Handle CORS preflight OPTIONS requests explicitly (prevents Vercel redirect issue)
app.options("*", cors(corsOptions));

// Apply CORS to all routes
app.use(cors(corsOptions));

// Manually set headers as a safety net for all responses
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }
    next();
});

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