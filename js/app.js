class JapaneseApp {
  constructor() {
    this.init();
  }

  init() {
    this.updateUI();
    this.bindEvents();
  }

  bindEvents() {
    // Handle tab switching if on the dashboard/index page
    const studyTab = document.getElementById('tab-study');
    const quizTab = document.getElementById('tab-quiz');

    if (studyTab && quizTab) {
      // The showSection function is still needed globally for the onclick attributes
      // or we can bind it here. Since I used onclick in HTML, I'll keep it global but 
      // can add more logic here if needed.
    }
  }

  updateUI() {
    const usernameEl = document.querySelector('.navbar .user-info .username');
    const streakEl = document.querySelector('.navbar .streak');

    if (usernameEl) {
      usernameEl.textContent = 'Learner';
    }

    if (streakEl) {
      this.updateStreak(streakEl);
    }
  }

  updateStreak(el) {
    const key = 'jlptStreak';
    const today = new Date().toDateString();
    let streak = JSON.parse(localStorage.getItem(key)) || { lastLogin: null, count: 0 };

    if (streak.lastLogin !== today) {
      // Check if it was yesterday to increment, otherwise reset or start
      const lastDate = streak.lastLogin ? new Date(streak.lastLogin) : null;
      const now = new Date();

      // Simple increment for demo purposes as per original logic
      streak.count = streak.lastLogin ? streak.count + 1 : 1;
      streak.lastLogin = today;
      localStorage.setItem(key, JSON.stringify(streak));
    }

    if (el) {
      el.textContent = `🔥 ${streak.count}-day streak`;
    }
  }

  goTo(page) {
    window.location.href = page;
  }
}

// Global helper for tab switching
function showSection(section) {
  const studySection = document.getElementById('studySection');
  const quizSection = document.getElementById('quizSection');
  const tabStudy = document.getElementById('tab-study');
  const tabQuiz = document.getElementById('tab-quiz');

  if (studySection && quizSection) {
    studySection.style.display = section === 'study' ? 'block' : 'none';
    quizSection.style.display = section === 'quiz' ? 'block' : 'none';
  }

  if (tabStudy && tabQuiz) {
    tabStudy.classList.remove('active');
    tabQuiz.classList.remove('active');
    document.getElementById(`tab-${section}`).classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.JLPTApp = new JapaneseApp();

  // Default view for dashboard
  if (document.getElementById('studySection')) {
    showSection('study');
  }
});