const axios = require("axios");

async function getCompanyNews(company) {

    const url = `https://newsapi.org/v2/everything?q=${company}&pageSize=5&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}`;

    const response = await axios.get(url);

    return response.data.articles;
}

module.exports = getCompanyNews;