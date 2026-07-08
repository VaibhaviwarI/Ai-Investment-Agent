const { Annotation } = require("@langchain/langgraph");

const InvestmentState = Annotation.Root({ //this will define graph's structure 
                                     // our graph will have these 5 fields on which data is shared
  company: Annotation(),

  ticker: Annotation(),

  financials: Annotation(),

  news: Annotation(),

  analysis: Annotation(),

  decision: Annotation(),
});

module.exports = InvestmentState;