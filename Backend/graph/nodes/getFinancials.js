const { getCompanyProfile } = require("../../services/fmp");

async function getFinancials(state) {

    console.log(`Fetching financials for ${state.company}`);

    const profile = await getCompanyProfile(state.ticker);

    if (!profile) {
        throw new Error(`No profile found for ${state.ticker}.`);
    }

    return {
        financials: {
            companyName: profile.companyName,
            symbol: profile.symbol,
            sector: profile.sector,
            industry: profile.industry,
            marketCap: profile.marketCap,
            price: profile.price,
            ceo: profile.ceo,
            description: profile.description
        }
    };
}

module.exports = getFinancials;