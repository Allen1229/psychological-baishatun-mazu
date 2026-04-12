// DOM Elements
const homePage = document.getElementById('home-page');
const quizPage = document.getElementById('quiz-page');
const loadingPage = document.getElementById('loading-page');
const resultPage = document.getElementById('result-page');
const adOverlay = document.getElementById('ad-overlay');

const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const questionCounter = document.getElementById('question-counter');
const progressBar = document.getElementById('progress-bar');
const questionTitle = document.getElementById('question-title');
const optionsContainer = document.getElementById('options-container');

// State
let currentQuestionIndex = 0;
let answers = [];

// Navigation
function showPage(pageElem) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  pageElem.classList.add('active');
}

// Start Quiz
startBtn.addEventListener('click', () => {
  currentQuestionIndex = 0;
  answers = [];
  showQuestion();
  showPage(quizPage);
});

// Render Question
function showQuestion() {
  const q = quizData.questions[currentQuestionIndex];
  questionCounter.textContent = `${currentQuestionIndex + 1} / ${quizData.questions.length}`;
  progressBar.style.width = `${((currentQuestionIndex) / quizData.questions.length) * 100}%`;
  questionTitle.textContent = q.question;
  
  optionsContainer.innerHTML = '';
  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `
      <svg class="option-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
      <span>${opt.text}</span>
    `;
    btn.addEventListener('click', () => selectOption(opt.value));
    optionsContainer.appendChild(btn);
  });
}

function selectOption(value) {
  answers.push(value);
  if (currentQuestionIndex < quizData.questions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    progressBar.style.width = '100%';
    setTimeout(calculateResult, 300);
  }
}

function calculateResult() {
  showPage(loadingPage);
  
  // 統計最高分的字母
  const counts = { A:0, B:0, C:0, D:0 };
  answers.forEach(a => counts[a]++);
  const maxLetter = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
  
  setTimeout(() => renderResult(maxLetter), 1500); // 直接進入結果頁
}

function showAdOverlay() {
  const selectedAd = quizData.ads[Math.floor(Math.random() * quizData.ads.length)];
  document.getElementById('ad-icon').src = selectedAd.icon;
  document.getElementById('ad-title').textContent = selectedAd.title;
  document.getElementById('ad-desc').textContent = selectedAd.description;
  
  const actionBtn = document.getElementById('ad-action-btn');
  actionBtn.onclick = () => window.open(selectedAd.url, '_blank');
  
  const closeBtn = document.getElementById('ad-close-btn');
  const timerEl = document.getElementById('ad-timer');
  const adModal = document.getElementById('ad-modal');
  
  adModal.classList.remove('hidden');
  closeBtn.classList.add('hidden');
  timerEl.classList.remove('hidden');
  
  let count = 5;
  timerEl.textContent = count;
  
  const timer = setInterval(() => {
    count--;
    if (count <= 0) {
      clearInterval(timer);
      timerEl.classList.add('hidden');
      closeBtn.classList.remove('hidden');
    } else {
      timerEl.textContent = count;
    }
  }, 1000);
  
  closeBtn.onclick = () => {
    adModal.classList.add('hidden');
    showPage(homePage); // 返回首頁
  };
}

function renderResult(resultKey) {
  const resultData = quizData.results[resultKey];
  document.getElementById('result-title').textContent = resultData.title;
  document.getElementById('result-desc').textContent = resultData.desc;
  
  // Set fallback SVG while image is loading, or rely on onerror
  document.getElementById('result-image').src = `images/result_${resultKey}.png`;
  
  showPage(resultPage);
}

// Restart
restartBtn.addEventListener('click', () => {
  if (quizData.ads && quizData.ads.length > 0) {
    showAdOverlay();
  } else {
    showPage(homePage);
  }
});

// 複製文字工具函式（相容所有瀏覽器）
function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text);
    } else {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
  } catch(e) {}
}

// Share logic
document.querySelectorAll('.share-label-pill').forEach(btn => {
  btn.addEventListener('click', () => {
    const resTitle = document.getElementById('result-title').textContent;
    const shareText = `【白沙屯媽祖啟駕】我的「人生願力」測驗結果是：${resTitle}！來測測你是哪一種？`;
    const shareUrl = window.location.href;
    const fullText = shareText + ' ' + shareUrl;
    const label = btn.textContent.trim();

    if (label === '分享') {
      if (navigator.share) {
        navigator.share({ title: '人生願力測驗', text: fullText, url: shareUrl }).catch(() => {
          copyText(fullText);
          alert('測驗結果與連結已複製！');
        });
      } else {
        copyText(fullText);
        alert('測驗結果與連結已複製！');
      }
    } else if (label === 'FB') {
      copyText(fullText);
      alert('已為您複製結果！\n若 FB 沒出現文字，直接貼上即可！');
      window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(shareUrl), '_blank');
    } else if (label === 'LINE') {
      copyText(fullText);
      alert('已為您複製結果！\n若 LINE 沒出現文字，直接貼上即可！');
      window.open('https://social-plugins.line.me/lineit/share?url=' + encodeURIComponent(shareUrl) + '&text=' + encodeURIComponent(shareText), '_blank');
    } else if (label === '脆') {
      copyText(fullText);
      alert('已為您複製結果！\n若 Threads 沒出現文字，直接貼上即可！');
      window.open('https://www.threads.net/intent/post?text=' + encodeURIComponent(fullText), '_blank');
    } else if (label === 'IG') {
      copyText(fullText);
      alert('已為您複製結果！\n請前往 IG 限動或貼文，直接貼上即可分享！');
    }
  });
});
