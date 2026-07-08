# 📈 AI Investment Research Agent

An AI-powered Investment Research Agent built using **React**, **Node.js**, **LangGraph.js**, and **LangChain.js**.

The application researches a company, gathers the latest news, analyzes the available information using an LLM, and provides an investment recommendation (**BUY**, **HOLD**, or **PASS**) along with the reasoning and associated risks.

---

# 🚀 Features

- AI-powered investment analysis
- Agentic workflow built using LangGraph
- Company research
- Latest news retrieval
- Investment recommendation (BUY / HOLD / PASS)
- Risk analysis
- Modern React + Tailwind CSS interface
- REST API built with Express.js

---

# 🏗 Tech Stack

### Frontend

- React
- Tailwind CSS
- Axios

### Backend

- Node.js
- Express.js

### AI

- LangChain.js
- LangGraph.js
- Groq LLM

### APIs

- NewsAPI
- Company Research API / Search Tool

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
│   ├── routes/
│   ├── services/
│   ├── prompts/
│   ├── app.js
│   └── .env
```

---

# ⚙️ How to Run

## Clone

```bash
git clone <repository-url>

cd investment-agent
```

---

## Backend

```bash
cd backend

npm install

npm run dev
```

or

```bash
node app.js
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend folder.

```env
GROQ_API_KEY=YOUR_GROQ_API_KEY

NEWS_API_KEY=YOUR_NEWS_API_KEY
```

---

# 🧠 How It Works

The application follows an Agentic AI workflow using LangGraph.

```
START
   │
   ▼
Research Company
   │
   ▼
Fetch Latest News
   │
   ▼
Analyze Investment
   │
   ▼
END
```

### Research Company

Collects publicly available information about the company.

### Fetch News

Retrieves the latest news related to the company.

### Analyze Investment

The LLM analyzes:

- Company information
- Recent news
- Business outlook
- Risks

It then generates an investment recommendation.

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
 Research Tool                News Tool
        │                           │
        └─────────────┬─────────────┘
                      ▼
                  Groq LLM
                      ▼
          Investment Recommendation
```

---

# 📊 Example Run

### Input

```
Apple
```

### Output

```
Decision

BUY

Investment Score

91

Reason

Apple demonstrates strong financial stability,
consistent revenue growth, and continued innovation
across multiple product categories.

Risks

• High valuation
• Strong competition
• Regulatory pressure
```

---

# 🔥 Key Design Decisions

- Used **LangGraph** to model the investment research workflow.
- Implemented separate nodes for research, news retrieval, and analysis.
- Kept business logic separate from API routes.
- Built reusable React components for maintainability.
- Used Tailwind CSS for rapid UI development.

---

# ⚖️ Trade-offs

Due to time constraints:

- Did not implement authentication.
- Did not include persistent chat history.
- Used external APIs instead of maintaining a financial database.
- Limited the analysis to a single company at a time.

---

# 🚀 Future Improvements

- Company comparison
- Portfolio recommendations
- Stock price charts
- PDF annual report analysis (RAG)
- Conversation memory
- User authentication
- Investment history
- Multi-agent collaboration
- Deployment monitoring

---

# 💡 AI Usage

AI tools were actively used during development for:

- Architecture planning
- LangGraph workflow design
- Prompt engineering
- Debugging
- UI improvements
- Code refactoring

The final implementation was reviewed, modified, and fully understood before submission.

---

# 📜 License

This project was developed as part of an AI Engineering Assignment.