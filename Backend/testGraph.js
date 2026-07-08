require("dotenv").config();

const investmentGraph = require("./graph/investmentGraph");

async function main() {

    const result = await investmentGraph.invoke({
        company:"Apple"
    });

    console.log(result);

}

main();