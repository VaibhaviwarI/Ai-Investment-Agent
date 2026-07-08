const getCompanyNews = require("../../services/news");

async function getNews(state) {

    console.log("Fetching News...");

    const articles = await getCompanyNews(state.company);

    return {

        news: articles.map(article => ({

            title: article.title,

            description: article.description,

            url: article.url

        }))

    };

}

module.exports = getNews;