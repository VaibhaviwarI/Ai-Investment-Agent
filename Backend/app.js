const express = require("express");
require("dotenv").config();
const analyzeRoute = require("./routes/analyze");

const app = express();

// Manual CORS middleware — full control, no package conflicts
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

    // Respond immediately to preflight OPTIONS requests with 200
    if (req.method === "OPTIONS") {
        res.status(200).end();
        return;
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