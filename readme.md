# 📈 AI Investment Research Agent

An AI-powered Investment Research Agent built using **React.js**, **Node.js**, **LangChain.js**, **LangGraph.js**, and **Groq LLM**.

The application researches a company, gathers the latest news, analyzes the available information using an LLM, and provides an investment recommendation (**BUY**, **HOLD**, or **PASS**) along with the reasoning, investment score, and associated risks.

---

# 🌟 Overview

The AI Investment Research Agent automates the process of investment research by combining external company data, recent news, and Large Language Model (LLM) reasoning.

Instead of manually researching multiple sources, users simply enter a company name. The agent then:

- 🔍 Researches the company
- 📰 Retrieves the latest news
- 🤖 Uses an LLM to analyze the information
- 📊 Generates an investment score
- 💰 Recommends **BUY**, **HOLD**, or **PASS**
- ⚠️ Explains potential investment risks

The project demonstrates how **LangGraph** can orchestrate multiple AI tasks through a graph-based workflow while React provides an intuitive frontend for interacting with the agent.

---

# 🚀 Features

- 🤖 AI-powered investment analysis
- 🧠 Agentic workflow built using LangGraph
- 🏢 Company research
- 📰 Latest news retrieval
- 📊 Investment scoring
- 💰 BUY / HOLD / PASS recommendation
- ⚠️ Risk analysis
- 💡 AI-generated reasoning
- 🎨 Modern React + Tailwind CSS interface
- 🌐 REST API built with Express.js

---

# 🏗 Tech Stack

## Frontend

- React.js
- Tailwind CSS
- Axios

## Backend

- Node.js
- Express.js

## AI

- LangChain.js
- LangGraph.js
- Groq LLM

## APIs

- NewsAPI
- Financial Modeling Prep API (Company Research)

---

# 📂 Project Structure

```
investment-agent/

├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── backend/
│   ├── graph/
│   │   ├── nodes/
│   │   ├── state.js
│   │   └── investmentGraph.js
│   │
│   ├── services/
│   ├── routes/
│   ├── prompts/
│   ├── app.js
│   └── .env
```

---

# 📁 Folder Responsibilities

### 📱 frontend/

- User Interface
- Company Search
- API Calls
- Result Visualization

### 🌐 backend/routes/

- REST API endpoints

### 🔗 backend/graph/

- LangGraph workflow
- State management

### 🧩 backend/nodes/

- Individual graph nodes
- Company Research Node
- News Retrieval Node
- Investment Analysis Node

### 🔧 backend/services/

- External API integrations

### 📝 backend/prompts/

- LLM prompt templates

---

# ⚙️ How to Run

## 1️⃣ Clone Repository

```bash
git clone <repository-url>

cd investment-agent
```

---

## 2️⃣ Backend Setup

```bash
cd backend

npm install
```

Run

```bash
npm run dev
```

or

```bash
node app.js
```

---

## 3️⃣ Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

# 🔑 Environment Variables

Create a **.env** file inside the backend folder.

```env
GROQ_API_KEY=YOUR_GROQ_API_KEY

NEWS_API_KEY=YOUR_NEWS_API_KEY

FMP_API_KEY=YOUR_FINANCIAL_MODELING_PREP_API_KEY
```

---

# 🧠 How It Works

The project follows an Agentic AI workflow built using LangGraph.

```
               START
                 │
                 ▼
      🔍 Research Company
                 │
                 ▼
      📰 Fetch Latest News
                 │
                 ▼
     🤖 Analyze Investment
                 │
                 ▼
                END
```

## 🔍 Research Company

The Research Node collects publicly available company information such as:

- Company profile
- Industry
- Business summary
- Market information

---

## 📰 Fetch Latest News

The News Node retrieves recent news articles related to the selected company.

This enables the agent to consider current market events before generating recommendations.

---

## 🤖 Analyze Investment

The Analysis Node sends the collected information to the Groq LLM.

The LLM analyzes:

- Company fundamentals
- Recent news
- Business outlook
- Growth opportunities
- Investment risks

Finally, it generates:

- Investment Score
- Recommendation
- Reasoning
- Risk Assessment

---

# 🏛 Architecture

```
                 React Frontend
                       │
                       ▼
                Express REST API
                       │
                       ▼
                 LangGraph Agent
                       │
         ┌─────────────┴─────────────┐
         │                           │
         ▼                           ▼
  Company Research Tool        News Retrieval Tool
         │                           │
         └─────────────┬─────────────┘
                       ▼
                   Shared State
                       │
                       ▼
                    Groq LLM
                       │
                       ▼
      Investment Recommendation
```

---

# 🔄 Architecture Explanation

1. The React frontend sends a company name to the Express backend.

2. Express invokes the LangGraph workflow.

3. The Research Node gathers company information.

4. The News Node retrieves the latest news articles.

5. The shared LangGraph state stores all collected information.

6. The Analysis Node sends the data to the Groq LLM.

7. The LLM returns:

- Investment Score
- BUY / HOLD / PASS Recommendation
- Explanation
- Risks

8. Express returns the response as JSON to the React frontend.

---

# 🧩 LangGraph State

The workflow maintains a shared state containing:

- Company Name
- Company Research
- Latest News
- Investment Analysis

Each node updates the shared state before passing it to the next node.

This allows nodes to communicate without tightly coupling their implementations.

---

# ❓ Why LangGraph?

Instead of writing sequential code, LangGraph was chosen because it models the workflow as a directed graph.

Benefits include:

- Modular workflow design
- Easy addition of new tools
- Better separation of concerns
- Shared state management
- Scalable architecture
- Easy debugging
- Future support for conditional routing and looping

---

# 🎯 Prompt Engineering

The LLM uses a structured prompt instructing it to:

- Summarize company information
- Analyze recent news
- Identify investment risks
- Evaluate business outlook
- Recommend BUY, HOLD, or PASS
- Explain every recommendation

Using structured prompts improves response consistency and reduces hallucinations.

---

# 📊 Example Runs

## Example 1

### Input

```
Apple
```

### Output

```
Recommendation : BUY

Investment Score : 91

Reason :

Apple demonstrates strong financial stability,
consistent revenue growth,
strong ecosystem,
and continued innovation.

Risks

• High valuation

• Regulatory pressure

• Global competition
```

---

## Example 2

### Input

```
Tesla
```

### Output

```
Recommendation : HOLD

Investment Score : 74

Reason :

Tesla remains an innovative market leader
but faces increasing competition,
pricing pressure,
and uncertain macroeconomic conditions.

Risks

• EV competition

• Margin pressure

• Regulatory uncertainty
```

---

## Example 3

### Input

```
Nikola
```

### Output

```
Recommendation : PASS

Investment Score : 34

Reason :

Weak financial outlook,
operational challenges,
and high uncertainty increase investment risk.

Risks

• Bankruptcy concerns

• Weak financial performance

• High market uncertainty
```

---

# 🔥 Key Design Decisions

### ✅ LangGraph Workflow

Used LangGraph to organize the application into modular nodes.

---

### ✅ Separation of Concerns

Business logic is separated from API routes.

---

### ✅ Service Layer

External APIs are isolated inside services.

---

### ✅ Prompt Engineering

Prompt templates are maintained separately for easier updates.

---

### ✅ Reusable React Components

Frontend components are modular and reusable.

---

### ✅ Tailwind CSS

Chosen for rapid UI development and responsive design.

---

# ⚖️ Trade-offs

To keep the MVP simple and focused:

- No authentication
- No user accounts
- No persistent database
- No conversation memory
- One company analyzed at a time
- External APIs instead of maintaining financial datasets
- No caching layer for repeated requests
- LLM-based reasoning without a dedicated sentiment model

---

# ⚠️ Error Handling

The application gracefully handles:

- Invalid company names
- Missing API responses
- External API failures
- LLM generation failures
- Unexpected server errors

Meaningful error messages are returned to the frontend whenever possible.

---

# 🚀 Future Improvements

With more development time, the following features can be added:

- 📈 Company comparison
- 📊 Stock price charts
- 💼 Portfolio recommendations
- 📄 Annual Report (PDF) analysis using RAG
- 🧠 Long-term conversation memory
- 👤 User authentication
- 💾 Investment history
- 📚 Vector database integration
- 🤝 Multi-agent collaboration
- ⚡ Caching layer
- ☁️ Cloud deployment
- 📉 Real-time market data
- 📱 Mobile responsive improvements

---

# 💡 AI Usage

AI tools were actively used during development for:

- Architecture planning
- LangGraph workflow design
- Prompt engineering
- API integration
- Debugging
- React UI improvements
- Code refactoring
- Documentation writing

All generated code was manually reviewed, modified, tested, and fully understood before being included in the final implementation.

---

# 📜 AI Development Logs (Bonus)

During development, conversations with an AI assistant were used to:

- Understand LangGraph
- Learn LangChain concepts
- Design the workflow
- Improve prompts
- Fix bugs
- Refactor code
- Improve UI
- Debug API integrations

> **Note:** AI-assisted development accelerated implementation, but the final code was manually reviewed, tested, and validated.

---


# 📄 License

This project was developed as part of an **AI Engineering Assignment** for educational and evaluation purposes.
