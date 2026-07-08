const { searchCompany } = require("../../services/fmp");

async function resolveCompany(state) {

    console.log("Resolving Company...");

    const company = await searchCompany(state.company);

    if (!company) {
        throw new Error(`Company "${state.company}" was not found. It may be private or not publicly listed.`);
    }

    return {

        ticker: company.symbol

    };

}

module.exports = resolveCompany;