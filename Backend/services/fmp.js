const axios = require("axios");

async function searchCompany(company) {

    // Try symbol search first (e.g. user types "AAPL")
    const symbolUrl = `https://financialmodelingprep.com/stable/search-symbol?query=${company}&limit=5&apikey=${process.env.FMP_API_KEY}`;
    const symbolRes = await axios.get(symbolUrl);

    if (symbolRes.data && symbolRes.data.length > 0) {
        // Prefer US listing (no dot in symbol like AAPL.DE)
        return symbolRes.data.find(item => !item.symbol.includes(".")) || symbolRes.data[0];
    }

    // Fall back to name search (e.g. user types "Apple")
    const nameUrl = `https://financialmodelingprep.com/stable/search-name?query=${company}&limit=10&apikey=${process.env.FMP_API_KEY}`;
    const nameRes = await axios.get(nameUrl);

    if (nameRes.data && nameRes.data.length > 0) {
        // Prefer US listing (no dot in symbol like AAPL.DE)
        return nameRes.data.find(item => !item.symbol.includes(".")) || nameRes.data[0];
    }

    return null;
}

async function getCompanyProfile(symbol) {

    const url = `https://financialmodelingprep.com/stable/profile?symbol=${symbol}&apikey=${process.env.FMP_API_KEY}`;

    const response = await axios.get(url);

    return response.data[0];
}

module.exports = {
    searchCompany,
    getCompanyProfile
};
