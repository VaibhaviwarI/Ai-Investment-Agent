const { StateGraph, START, END } = require("@langchain/langgraph");

const InvestmentState = require("./state");
const getFinancials = require("./nodes/getFinancials");
const getNews = require("./nodes/getNews");
const analyzeInvestment = require("./nodes/analyzeInvestment");
const resolveCompany = require("./nodes/resolveCompany");

const graph = new StateGraph(InvestmentState)

    .addNode("resolveCompany", resolveCompany)
    .addNode("getFinancials", getFinancials) //first argument is the node name and second is the function that runs when this node is executed
    .addNode("getNews", getNews)
    .addNode("analyzeInvestment", analyzeInvestment)

    .addEdge(START, "resolveCompany")
     .addEdge("resolveCompany","getFinancials")
     .addEdge("getFinancials", "getNews")
      .addEdge("getNews", "analyzeInvestment")
    .addEdge("analyzeInvestment", END);

const investmentGraph = graph.compile(); //converts the description into executable code

module.exports = investmentGraph;

