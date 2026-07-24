# 🚀 CP Coach

> AI-Powered Competitive Programming Analytics & Coaching Platform

CP Coach is a full-stack web application that helps competitive programmers analyze their Codeforces performance using real-time analytics and AI-generated insights. The platform provides detailed statistics, topic-wise analysis, profile comparison, and personalized study recommendations powered by Google's Gemini AI.

---

## 📌 Features

### 📊 Profile Analytics
- Fetch real-time Codeforces profile information
- Current & Maximum Rating
- Contest History Analysis
- Solved Problems
- Success Rate
- Average Rating Gain
- Favourite Topics
- Consistency Score
- Topic-wise Strengths & Weaknesses

### 🤖 AI-Powered Comparison
Compare your profile with any Codeforces user.

The AI automatically generates:

- Performance Summary
- Strengths
- Weaknesses
- Personalized Recommendations
- Study Plan

using Google's Gemini API.

### 📈 Performance Visualization
- Rating History
- Contest Performance
- Topic Analysis
- Interactive Dashboard

---

# 🛠 Tech Stack

## Frontend

- React.js
- JavaScript
- CSS3
- Axios
- React Router

## Backend

- Node.js
- Express.js
- REST APIs

## APIs

- Codeforces API
- Google Gemini API

## Tools

- Git
- GitHub
- VS Code
- Postman

---

# 📂 Project Structure

```
CP-Coach
│
├── frontend
│   ├── components
│   ├── pages
│   ├── services
│   └── assets
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── services
│   ├── utils
│   └── server.js
│
└── README.md
```

---

# ⚙️ Installation

## Clone the repository

```bash
git clone https://github.com/yourusername/cp-coach.git
```

Move into the project

```bash
cd cp-coach
```

---

## Backend Setup

```bash
cd backend

npm install

npm run dev
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend folder.

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

---

# 🧠 How It Works

1. User enters a Codeforces handle.
2. React sends requests to the backend.
3. Backend fetches:
   - User Profile
   - Contest History
   - Submission History
4. Analytics Service processes raw Codeforces data.
5. AI Service sends structured analytics to Gemini.
6. Gemini returns personalized insights.
7. React displays analytics, comparisons, and recommendations.

---

# 📷 Screenshots

## Dashboard

(Add Screenshot)

---

## AI Comparison

(Add Screenshot)

---

## Analytics

(Add Screenshot)

---

# 🚀 Future Improvements

- Authentication
- Multi-platform Competitive Programming Support
- Contest Prediction
- Daily AI Coaching
- Progress Tracking
- Advanced Charts
- Personalized Learning Roadmaps

---

# 👨‍💻 Author

**Swantin Jo Mathew**

Computer Science Undergraduate

Full Stack Developer | AI Enthusiast

LinkedIn: https://linkedin.com/in/swantinmathew

GitHub: https://github.com/swantinmathew

Email: swantinmathew@gmail.com

---

# 📄 License

This project is licensed under the MIT License.
