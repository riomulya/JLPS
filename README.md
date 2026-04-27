# 🇯🇵 Japanese JLPT Learner – Complete Web App

**Japanese JLPT Learner** is a full-featured, interactive web application designed to help learners master the **JLPT N5 to N1 levels** through quizzes, downloadable study materials, progress tracking, and real-time feedback.

🎯 Built with **vanilla HTML, CSS, and JavaScript** — no frameworks, no backend required.  
🚀 Perfect for self-learners, teachers, and developers.

---

## 🏷️ Made By
**Sanskar Hatwar**  
📧 Email: sanskarhatwar95@gmail.com    
💼 GitHub: https://github.com/hatwarsanskar95-web

> "Empowering language learners with technology."

---

## 🌟 Features

### 📚 **Study Materials (N5–N1)**
- Downloadable PDFs for each level:
  - Grammar
  - Vocabulary
  - Kanji
- Level-specific content (no repetition)
- Real, free JLPT study guides from trusted sources

### 🧠 **Interactive Quizzes**
- **Level Quizzes (N5–N1)**:
  - Select level → Click "Start Quiz"
  - Questions **shuffled randomly**
  - Timer starts on quiz start
  - Green border highlights selected answer
- **Daily Challenge Quiz**:
  - 100 mixed questions from N5 to N1
  - Progress bar shows completion
- **Results Page**:
  - Score display (e.g., `78 / 80`)
  - Time taken shown
  - Feedback: "🎉 Master Level!" or "📚 Keep practicing!"
  - Review with correct/incorrect answers and explanations

### 🎯 **Learning Flow**
1. Dashboard
2. Click **Study** → Download PDFs
3. Click **Quiz** → Select level → Start Quiz
4. Answer → Submit → See results

### 📊 **Progress & Motivation**
- Streak counter
- Level progress bars
- Encouraging feedback based on score

---

## 📁 File Structure
japanese-jlpt-learner/
│
├── index.html # Main dashboard with study & quiz
├── study-materials.html # Dynamic PDF download by level
├── quiz.html # Level quiz with timer & shuffle
├── daily-quiz.html # 100 mixed questions (N5-N1)
├── result.html # Quiz results with time & review
├── result-daily.html # Daily quiz results
│
├── css/
│ └── style.css # Styling for all pages
│
├── js/
│ ├── app.js # Session, navigation, streaks
│ └── quiz-data.js # 200+ quiz questions (N5-N1)
│
├── pdfs/ # 15 real JLPT PDFs
│ ├── N5-Grammar.pdf
│ ├── ...
│ └── N1-Kanji.pdf
│
└── README.md # This file


---

## 🛠️ Tech Stack

| Layer | Technology |
|------|------------|
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla) |
| **Styling** | Custom CSS + Google Fonts (Noto Sans JP) |
| **Data** | `localStorage` (no backend) |
| **Quiz Engine** | Dynamic rendering, Fisher-Yates shuffle, timer |
| **Responsive** | Works on mobile & desktop |
| **Fonts** | [Noto Sans JP](https://fonts.google.com/specimen/Noto+Sans+JP) |

---

## 📦 Requirements

### 💻 Software
- Web browser (Chrome, Firefox, Edge, Safari)
- Text editor (VS Code, Sublime, etc.)
- Terminal (Command Prompt, PowerShell, or VS Code Terminal)

### ⚙️ Tools
- `http-server` (for local testing)

### 📦 Install Dependencies
```bash
npm install -g http-server# JLPS
