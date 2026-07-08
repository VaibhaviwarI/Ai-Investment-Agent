const llm = require("../../services/llm");

async function analyzeInvestment(state) {

    console.log("Analyzing...");

    const prompt = `
You are an expert investment analyst.

Company:
${state.company}

Research:
${JSON.stringify(state.financials, null, 2)}

News:
${JSON.stringify(state.news, null, 2)}

CRITICAL INSTRUCTIONS:
1. If the company is closed, delisted, has a stock price below $1.00, or has a market cap below $100 million, you MUST ignore any positive descriptions or marketing facts. For these cases, immediately decide "PASS" and give a very low score (under 20).
2. Otherwise, perform a standard analysis of the company's financial profile and recent news.

Based on this information, return ONLY valid JSON.

{
    "decision":"BUY | HOLD | PASS",
    "score":90,
    "reason":"One short paragraph explaining your decision with specific numbers from the data",
    "risks":[
        "Risk 1",
        "Risk 2",
        "Risk 3"
    ]
}

Do not return markdown.
Do not use \`\`\`json.
Return ONLY JSON.
`;

    // Groq sometimes returns empty output — retry once if that happens
    let response;
    try {
        response = await llm.invoke(prompt);
    } catch(err) {
        console.log("Groq returned empty, retrying...");
        response = await llm.invoke(prompt);
    }

    let analysis;

    try {

        let raw = response.content.trim();

        // Strip markdown code fences if the model adds them anyway
        if (raw.startsWith("```")) {
            raw = raw.replace(/^```(?:json)?\s*/i, "").replace(/```\s*$/, "").trim();
        }

        analysis = JSON.parse(raw);

    } catch(err) {

        console.log(err);

        analysis = {
            decision: "UNKNOWN",
            score: 0,
            reason: "Unable to parse AI response.",
            risks: ["No risks available"]
        };

    }

    return { analysis };

}

module.exports = analyzeInvestment;