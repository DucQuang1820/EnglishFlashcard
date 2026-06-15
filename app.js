/* ═══════════════════════════════════════════════════════
   DATA — Vocabulary Bank (A2-B1)
═══════════════════════════════════════════════════════ */
const VOCAB_BANK = {
  'vocab-basic': [
    { word: 'Nervous', phonetic: '/ˈnɜːvəs/', pos: 'adj', meaning: 'Anxious or worried', vi: 'Lo lắng, hồi hộp', example: "I felt nervous before the exam.", example_vi: "Tôi cảm thấy hồi hộp trước kỳ thi.", note: "Nervous ≠ angry. Nervous = hồi hộp/lo", choices_vi: ['Lo lắng, hồi hộp', 'Tức giận', 'Buồn bã', 'Mệt mỏi'] },
    { word: 'Exhausted', phonetic: '/ɪɡˈzɔːstɪd/', pos: 'adj', meaning: 'Extremely tired', vi: 'Kiệt sức, mệt lả', example: "She was exhausted after running.", example_vi: "Cô ấy kiệt sức sau khi chạy.", note: "Tired → very tired → exhausted (mạnh nhất!)", choices_vi: ['Kiệt sức, mệt lả', 'Vui vẻ', 'No nê', 'Căng thẳng'] },
    { word: 'Afford', phonetic: '/əˈfɔːd/', pos: 'verb', meaning: 'To have enough money/time', vi: 'Đủ khả năng (tiền/thời gian)', example: "I can't afford a new car.", example_vi: "Tôi không đủ tiền mua xe mới.", note: "Dùng được cho cả tiền lẫn thời gian!", choices_vi: ['Đủ khả năng', 'Tiết kiệm', 'Chi tiêu', 'Vay mượn'] },
    { word: 'Suggest', phonetic: '/səˈdʒɛst/', pos: 'verb', meaning: 'To mention an idea', vi: 'Đề xuất, gợi ý', example: "She suggested going to the park.", example_vi: "Cô ấy gợi ý đi công viên.", note: "✗ suggest + to V  ✓ suggest + V-ing", choices_vi: ['Đề xuất, gợi ý', 'Yêu cầu', 'Từ chối', 'Đồng ý'] },
    { word: 'Polite', phonetic: '/pəˈlaɪt/', pos: 'adj', meaning: 'Respectful and well-mannered', vi: 'Lịch sự, nhã nhặn', example: "She is always polite to customers.", example_vi: "Cô ấy luôn lịch sự với khách hàng.", note: "Opposite: rude (thô lỗ)", choices_vi: ['Lịch sự, nhã nhặn', 'Thô lỗ', 'Dũng cảm', 'Thông minh'] },
    { word: 'Envy', phonetic: '/ˈɛnvi/', pos: 'noun/verb', meaning: 'Feeling of wanting what others have', vi: 'Ghen tị, thèm muốn', example: "I envy her confidence.", example_vi: "Tôi ghen tị với sự tự tin của cô ấy.", note: "Envy ≠ jealousy. Envy = muốn thứ người khác có.", choices_vi: ['Ghen tị', 'Ngưỡng mộ', 'Lo lắng', 'Ghét bỏ'] },
    { word: 'Stubborn', phonetic: '/ˈstʌbərn/', pos: 'adj', meaning: 'Refusing to change one\'s opinion', vi: 'Bướng bỉnh, cứng đầu', example: "He is too stubborn to apologize.", example_vi: "Anh ấy quá bướng bỉnh để xin lỗi.", note: "Có thể mang nghĩa tích cực: kiên định!", choices_vi: ['Bướng bỉnh, cứng đầu', 'Nhút nhát', 'Thân thiện', 'Lười biếng'] },
    { word: 'Grateful', phonetic: '/ˈɡreɪtfʊl/', pos: 'adj', meaning: 'Feeling thankful', vi: 'Biết ơn, cảm kích', example: "I'm grateful for your help.", example_vi: "Tôi biết ơn vì sự giúp đỡ của bạn.", note: "Grateful for sth / to sb / to do sth", choices_vi: ['Biết ơn, cảm kích', 'Tức giận', 'Xấu hổ', 'Bình thản'] },
  ],
  'vocab-daily': [
    { word: 'Borrow', phonetic: '/ˈbɒrəʊ/', pos: 'verb', meaning: 'To take sth from sb temporarily', vi: 'Mượn (nhận từ người khác)', example: "Can I borrow your pen?", example_vi: "Tôi có thể mượn bút không?", note: "Borrow = bạn nhận. Lend = bạn đưa đi.", choices_vi: ['Mượn (nhận)', 'Cho mượn (đưa)', 'Mua', 'Đánh mất'] },
    { word: 'Lend', phonetic: '/lɛnd/', pos: 'verb', meaning: 'To give sth to sb temporarily', vi: 'Cho mượn (đưa cho người khác)', example: "She lent me her umbrella.", example_vi: "Cô ấy cho tôi mượn ô của cô ấy.", note: "Lend = L = Let someone have it", choices_vi: ['Cho mượn (đưa)', 'Mượn (nhận)', 'Mua', 'Tặng'] },
    { word: 'Appointment', phonetic: '/əˈpɔɪntmənt/', pos: 'noun', meaning: 'A scheduled meeting', vi: 'Cuộc hẹn (đã đặt trước)', example: "I have a doctor's appointment at 3pm.", example_vi: "Tôi có hẹn bác sĩ lúc 3 giờ.", note: "Make/have/cancel an appointment", choices_vi: ['Cuộc hẹn đặt trước', 'Cuộc họp ngẫu nhiên', 'Sự kiện', 'Buổi tiệc'] },
    { word: 'Commute', phonetic: '/kəˈmjuːt/', pos: 'verb/noun', meaning: 'Travel to work regularly', vi: 'Đi làm hàng ngày (lộ trình)', example: "My commute takes 40 minutes.", example_vi: "Hành trình đi làm của tôi mất 40 phút.", note: "Rất hay dùng khi nói về cuộc sống hàng ngày", choices_vi: ['Đi làm hàng ngày', 'Đi du lịch', 'Đi học', 'Đi mua sắm'] },
    { word: 'Receipt', phonetic: '/rɪˈsiːt/', pos: 'noun', meaning: 'A document proving payment', vi: 'Hóa đơn, biên lai', example: "Keep your receipt for returns.", example_vi: "Giữ hóa đơn để đổi trả hàng.", note: "Lưu ý: 'p' trong receipt không đọc!", choices_vi: ['Hóa đơn, biên lai', 'Thực đơn', 'Hợp đồng', 'Tờ rơi'] },
    { word: 'Recommend', phonetic: '/ˌrɛkəˈmɛnd/', pos: 'verb', meaning: 'To suggest as good or suitable', vi: 'Giới thiệu, đề nghị', example: "Can you recommend a good restaurant?", example_vi: "Bạn có thể giới thiệu nhà hàng ngon không?", note: "Recommend + V-ing hoặc that + S + V", choices_vi: ['Giới thiệu, đề nghị', 'Yêu cầu', 'Phê bình', 'Từ chối'] },
    { word: 'Although', phonetic: '/ɔːlˈðəʊ/', pos: 'conjunction', meaning: 'Despite the fact that', vi: 'Mặc dù, dù rằng', example: "Although it rained, we went out.", example_vi: "Mặc dù trời mưa, chúng tôi vẫn ra ngoài.", note: "Although/Even though/Though — cùng nghĩa, đầu câu", choices_vi: ['Mặc dù, dù rằng', 'Bởi vì', 'Vì vậy', 'Tuy nhiên'] },
    { word: 'Remind', phonetic: '/rɪˈmaɪnd/', pos: 'verb', meaning: 'To cause someone to remember', vi: 'Nhắc nhở, gợi nhớ', example: "Please remind me to call her.", example_vi: "Hãy nhắc tôi gọi cho cô ấy nhé.", note: "Remind sb to do sth / remind sb of sth", choices_vi: ['Nhắc nhở, gợi nhớ', 'Quên mất', 'Hỏi thăm', 'Yêu cầu'] },
  ],
  'phrase': [
    { word: 'By the way', phonetic: '/baɪ ðə weɪ/', pos: 'phrase', meaning: 'Used to introduce a new topic', vi: 'Nhân tiện, à này', example: "By the way, did you hear the news?", example_vi: "Nhân tiện, bạn có nghe tin chưa?", note: "Viết tắt: BTW. Hay dùng trong nhắn tin!", choices_vi: ['Nhân tiện, à này', 'Vì thế', 'Ví dụ', 'Cuối cùng'] },
    { word: 'Take it easy', phonetic: '/teɪk ɪt ˈiːzi/', pos: 'phrase', meaning: 'Relax / Don\'t worry', vi: 'Thư giãn / Đừng lo', example: "Take it easy, you'll do great!", example_vi: "Cứ thoải mái, bạn sẽ làm tốt thôi!", note: "Cũng dùng để tạm biệt thân mật", choices_vi: ['Thư giãn, đừng lo', 'Cố gắng lên', 'Bỏ cuộc đi', 'Nghiêm túc nào'] },
    { word: 'Make up your mind', phonetic: '/meɪk ʌp jɔː maɪnd/', pos: 'idiom', meaning: 'To make a decision', vi: 'Đưa ra quyết định', example: "Just make up your mind already!", example_vi: "Quyết định đi nào!", note: "'Have you made up your mind?' = Bạn quyết định chưa?", choices_vi: ['Đưa ra quyết định', 'Thay đổi suy nghĩ', 'Nhớ lại điều gì', 'Giải quyết vấn đề'] },
    { word: 'On second thought', phonetic: '/ɒn ˈsɛkənd θɔːt/', pos: 'phrase', meaning: 'After thinking again, changing opinion', vi: 'Nghĩ lại thì...', example: "On second thought, let's stay home.", example_vi: "Nghĩ lại thì thôi, chúng ta ở nhà đi.", note: "Dùng khi bạn muốn thay đổi ý kiến vừa nói", choices_vi: ['Nghĩ lại thì...', 'Đầu tiên là...', 'Nói thật ra...', 'Cuối cùng là...'] },
    { word: 'Run out of', phonetic: '/rʌn aʊt ɒv/', pos: 'phrasal verb', meaning: 'To have no more of something left', vi: 'Hết (cái gì đó)', example: "We ran out of milk.", example_vi: "Chúng ta hết sữa rồi.", note: "Run out of time / money / ideas — rất thông dụng!", choices_vi: ['Hết (cái gì đó)', 'Thoát ra khỏi', 'Chạy đến', 'Mua thêm'] },
    { word: 'Look forward to', phonetic: '/lʊk ˈfɔːwəd tuː/', pos: 'phrasal verb', meaning: 'To be excited about a future event', vi: 'Mong đợi, háo hức chờ đợi', example: "I'm looking forward to the weekend.", example_vi: "Tôi đang mong đợi cuối tuần này.", note: "Look forward to + V-ing (không dùng to + V)", choices_vi: ['Mong đợi, háo hức', 'Lo lắng về', 'Nhớ lại', 'Hối tiếc vì'] },
    { word: 'Get used to', phonetic: '/ɡɛt juːst tuː/', pos: 'phrase', meaning: 'To become familiar with something', vi: 'Quen với điều gì đó (dần dần)', example: "I'm getting used to waking up early.", example_vi: "Tôi đang quen dần với việc dậy sớm.", note: "Get used to + V-ing. Be used to = đã quen rồi", choices_vi: ['Quen với (dần dần)', 'Không thích', 'Bắt đầu làm', 'Ngừng làm'] },
    { word: 'What\'s up?', phonetic: '/wɒts ʌp/', pos: 'phrase', meaning: 'Casual greeting: How are you? / What\'s happening?', vi: 'Có gì mới không? / Bạn khỏe không?', example: "Hey! What's up with you lately?", example_vi: "Này! Dạo này bạn thế nào?", note: "Thân mật hơn 'How are you'. Đáp: 'Not much, you?'", choices_vi: ['Có gì mới không?', 'Bạn đang nhìn gì?', 'Tại sao bạn đứng đây?', 'Trên kia là gì?'] },
  ],
};

/* ═══════════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════════ */
const DEFAULT_STATE = {
  name: 'Dưa Hấu Nhỏ',
  level: 'A2',
  xp: 0,
  hearts: 5,
  streak: 0,
  lastStudyDate: '',
  studiedDates: [],
  learnedWords: [],
  lessonsCompleted: {},
};

let S = {}; // active state

function loadState() {
  try {
    const raw = localStorage.getItem('engDaily_v3');
    S = raw ? { ...DEFAULT_STATE, ...JSON.parse(raw) } : { ...DEFAULT_STATE };
  } catch { S = { ...DEFAULT_STATE }; }
}

function saveState() {
  localStorage.setItem('engDaily_v3', JSON.stringify(S));
}

/* ═══════════════════════════════════════════════════════
   LESSON ENGINE
═══════════════════════════════════════════════════════ */
let lessonState = {
  lessonKey: '',
  queue: [],       // array of question objects
  qIdx: 0,
  hearts: 5,
  correctCount: 0,
  totalCount: 0,
  currentAnswer: null,
  answered: false,
};

function startLesson(lessonKey) {
  const words = VOCAB_BANK[lessonKey];
  if (!words) return;

  lessonState.lessonKey = lessonKey;
  lessonState.hearts = S.hearts;
  lessonState.correctCount = 0;
  lessonState.totalCount = 0;
  lessonState.answered = false;
  lessonState.currentAnswer = null;

  // Build question queue: each word gets 2 question types
  const queue = [];
  words.forEach(w => {
    // Q type 1: multiple choice (EN word → pick VI meaning)
    queue.push({ type: 'mc-en-vi', word: w });
    // Q type 2: multiple choice (VI meaning → pick EN word)
    queue.push({ type: 'mc-vi-en', word: w });
  });

  // Shuffle
  lessonState.queue = queue.sort(() => Math.random() - 0.5).slice(0, 14);
  lessonState.qIdx = 0;
  lessonState.totalCount = lessonState.queue.length;

  showScreen('screen-lesson');
  renderQuestion();
}

function renderQuestion() {
  const q = lessonState.queue[lessonState.qIdx];
  if (!q) { endLesson(); return; }

  lessonState.answered = false;
  lessonState.currentAnswer = null;

  updateProgress();
  updateHearts();

  const body = document.getElementById('lessonBody');
  const footer = document.getElementById('lessonFooter');
  footer.innerHTML = '<button class="btn-check" id="btnCheck" disabled onclick="checkAnswer()">Kiểm tra</button>';

  if (q.type === 'mc-en-vi') {
    renderMcEnVi(q.word, body);
  } else {
    renderMcViEn(q.word, body);
  }
}

function renderMcEnVi(w, body) {
  // Show English word → pick Vietnamese meaning
  const allWords = Object.values(VOCAB_BANK).flat();
  const wrong = allWords
    .filter(x => x.word !== w.word)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map(x => x.vi);

  const options = shuffle([w.vi, ...wrong]);

  body.innerHTML = `
    <div class="q-direction">Chọn nghĩa đúng</div>
    <div class="word-card">
      <div class="wc-word">${w.word}</div>
      ${w.phonetic ? `<div class="wc-phonetic">${w.phonetic}</div>` : ''}
      <div class="wc-pos">${w.pos}</div>
    </div>
    <div class="options-grid">
      ${options.map((o, i) => `
        <button class="option-btn" data-val="${escHtml(o)}" onclick="selectOption(this, '${escHtml(w.vi)}')">${o}</button>
      `).join('')}
    </div>`;
}

function renderMcViEn(w, body) {
  // Show Vietnamese → pick English word
  const allWords = Object.values(VOCAB_BANK).flat();
  const wrong = allWords
    .filter(x => x.word !== w.word)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map(x => x.word);

  const options = shuffle([w.word, ...wrong]);

  body.innerHTML = `
    <div class="q-direction">Từ tiếng Anh nào có nghĩa sau?</div>
    <div style="background:var(--gray-50);border:2px solid var(--gray-100);border-radius:var(--radius-lg);padding:28px 20px;text-align:center;margin-bottom:20px;">
      <div style="font-size:22px;font-weight:900;color:var(--text)">${w.vi}</div>
      <div style="font-size:13px;color:var(--gray-400);margin-top:6px;font-weight:600">${w.meaning}</div>
    </div>
    <div class="options-grid">
      ${options.map(o => `
        <button class="option-btn" data-val="${escHtml(o)}" onclick="selectOption(this, '${escHtml(w.word)}')">${o}</button>
      `).join('')}
    </div>`;
}

function selectOption(btn, correct) {
  if (lessonState.answered) return;

  // Deselect all
  document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');

  lessonState.currentAnswer = btn.dataset.val;
  lessonState._correct = correct;

  const checkBtn = document.getElementById('btnCheck');
  if (checkBtn) { checkBtn.disabled = false; }
}

function checkAnswer() {
  if (lessonState.answered) return;
  if (!lessonState.currentAnswer) return;

  lessonState.answered = true;
  const q = lessonState.queue[lessonState.qIdx];
  const isCorrect = lessonState.currentAnswer === lessonState._correct;

  // Highlight buttons
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.val === lessonState._correct) {
      btn.classList.add('correct');
    } else if (btn.classList.contains('selected') && !isCorrect) {
      btn.classList.add('wrong');
    }
  });

  if (isCorrect) {
    lessonState.correctCount++;
    showFeedback(true, q.word);
    popXP(10);
    if (!S.learnedWords.includes(q.word.word)) {
      S.learnedWords.push(q.word.word);
    }
  } else {
    lessonState.hearts--;
    showFeedback(false, q.word);
    shakeBody();
    if (lessonState.hearts <= 0) {
      setTimeout(() => { endLesson(true); }, 1600);
    }
  }

  updateHearts();
  saveState();
}

function showFeedback(correct, word) {
  const overlay = document.getElementById('feedbackOverlay');
  const panel = document.getElementById('feedbackPanel');
  const icon = document.getElementById('feedbackIcon');
  const wordEl = document.getElementById('feedbackWord');
  const explain = document.getElementById('feedbackExplain');

  panel.className = 'feedback-panel ' + (correct ? 'correct' : 'wrong');
  icon.textContent = correct ? '🎉' : '💔';
  wordEl.textContent = correct ? 'Chính xác!' : `Đáp án đúng: ${word.word}`;
  explain.textContent = word.note || (correct ? word.example : `${word.vi} — ${word.example_vi}`);

  overlay.classList.add('show');
  document.getElementById('lessonFooter').style.display = 'none';
}

function nextQuestion() {
  document.getElementById('feedbackOverlay').classList.remove('show');
  document.getElementById('lessonFooter').style.display = 'block';

  if (lessonState.hearts <= 0) {
    endLesson(true);
    return;
  }

  lessonState.qIdx++;
  if (lessonState.qIdx >= lessonState.queue.length) {
    endLesson(false);
  } else {
    renderQuestion();
  }
}

function endLesson(failed = false) {
  const acc = Math.round((lessonState.correctCount / lessonState.totalCount) * 100) || 0;
  const xpEarned = failed ? 5 : Math.round(lessonState.correctCount * 12);

  S.xp += xpEarned;
  S.hearts = Math.min(5, lessonState.hearts + (failed ? 0 : 1));

  if (!failed) {
    markTodayStudied();
    S.lessonsCompleted[lessonState.lessonKey] = (S.lessonsCompleted[lessonState.lessonKey] || 0) + 1;
  }

  saveState();

  document.getElementById('feedbackOverlay').classList.remove('show');
  document.getElementById('lessonFooter').style.display = 'block';

  const titles = ['Xuất sắc! 🏆', 'Tuyệt vời! ✨', 'Làm tốt lắm! 🌟', 'Cố lên! 💪'];
  document.getElementById('resultTitle').textContent = failed ? 'Hết tim rồi 💔' : titles[Math.floor(Math.random() * titles.length)];
  document.getElementById('resultSub').textContent = failed ? 'Lần sau cố gắng hơn nhé!' : `Bài học hoàn thành! +${xpEarned} XP`;
  document.getElementById('resultXP').textContent = `+${xpEarned}`;
  document.getElementById('resultAcc').textContent = acc + '%';
  document.getElementById('resultStreak').textContent = S.streak;
  document.getElementById('resultOwl').textContent = failed ? '😢' : acc >= 80 ? '🐙' : '🙂';

  showScreen('screen-result');
}

function updateProgress() {
  const pct = (lessonState.qIdx / lessonState.queue.length) * 100;
  document.getElementById('lessonProgress').style.width = pct + '%';
}

function updateHearts() {
  const h = Math.max(0, lessonState.hearts);
  document.getElementById('heartsDisplay').textContent = '❤️'.repeat(h) + '🖤'.repeat(5 - h);
}

function shakeBody() {
  const body = document.getElementById('lessonBody');
  body.classList.remove('shake');
  void body.offsetWidth;
  body.classList.add('shake');
}

/* ═══════════════════════════════════════════════════════
   FLASHCARD (REVIEW SCREEN)
═══════════════════════════════════════════════════════ */
let fcState = { cards: [], idx: 0, flipped: false };

function initFlashcards() {
  fcState.cards = Object.values(VOCAB_BANK).flat().sort(() => Math.random() - 0.5);
  fcState.idx = 0;
  fcState.flipped = false;
  renderFlashcard();
}

function renderFlashcard() {
  const c = fcState.cards[fcState.idx];
  if (!c) return;

  const inner = document.getElementById('flashcardInner');
  if (inner) inner.classList.remove('flipped');
  fcState.flipped = false;

  document.getElementById('fcTag').textContent = c.pos || 'từ vựng';
  document.getElementById('fcWord').textContent = c.word;
  document.getElementById('fcPhonetic').textContent = c.phonetic || '';
  document.getElementById('fcMeaning').textContent = c.meaning;
  document.getElementById('fcVi').textContent = c.vi;
  document.getElementById('fcExample').textContent = `"${c.example}" — ${c.example_vi}`;
  document.getElementById('fcNote').textContent = c.note ? `💡 ${c.note}` : '';
  document.getElementById('fcCounter').textContent = `${fcState.idx + 1} / ${fcState.cards.length}`;
  document.getElementById('fcActions').style.display = 'none';
}

function flipFlashcard() {
  fcState.flipped = !fcState.flipped;
  const inner = document.getElementById('flashcardInner');
  if (inner) inner.classList.toggle('flipped', fcState.flipped);
  document.getElementById('fcActions').style.display = fcState.flipped ? 'flex' : 'none';
}

function fcMark(difficulty) {
  const msgs = { hard: '📌 Sẽ ôn lại sớm!', ok: '👍 Ổn!', easy: '🎉 Nắm chắc rồi!' };
  showToast(msgs[difficulty]);
  fcNext();
}

function fcNext() {
  if (fcState.idx < fcState.cards.length - 1) {
    fcState.idx++;
    renderFlashcard();
  } else {
    showToast('🎊 Đã xem hết tất cả thẻ!');
  }
}

function fcPrev() {
  if (fcState.idx > 0) {
    fcState.idx--;
    renderFlashcard();
  }
}

/* ═══════════════════════════════════════════════════════
   STREAK & HOME
═══════════════════════════════════════════════════════ */
function getTodayStr() {
  return new Date().toISOString().slice(0, 10);
}

function markTodayStudied() {
  const today = getTodayStr();
  if (S.studiedDates.includes(today)) return;

  S.studiedDates.push(today);

  // Update streak
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yStr = yesterday.toISOString().slice(0, 10);

  if (S.lastStudyDate === yStr) {
    S.streak++;
  } else if (S.lastStudyDate !== today) {
    S.streak = 1;
  }
  S.lastStudyDate = today;
  saveState();
}

function renderHome() {
  const hour = new Date().getHours();
  const greet = hour < 12 ? 'Chào buổi sáng' : hour < 18 ? 'Chào buổi chiều' : 'Chào buổi tối';
  document.getElementById('home-greeting').textContent = `${greet}, ${S.name}! 👋`;

  const todayStudied = S.studiedDates.includes(getTodayStr());
  document.getElementById('home-subtext').textContent = todayStudied
    ? '✅ Đã học hôm nay rồi! Tiếp tục ôn tập nhé~'
    : '5 phút học hôm nay thôi nào~';

  document.getElementById('home-streak').textContent = S.streak;
  document.getElementById('home-xp').textContent = S.xp;
  document.getElementById('home-hearts').textContent = S.hearts;
  document.getElementById('streak-display').textContent = `🔥 ${S.streak} ngày`;

  renderWeekDots();

  // Unlock grammar after completing basic + daily
  const basicDone = (S.lessonsCompleted['vocab-basic'] || 0) > 0;
  const dailyDone = (S.lessonsCompleted['vocab-daily'] || 0) > 0;
  const phraseDone = (S.lessonsCompleted['phrase'] || 0) > 0;

  if (basicDone && dailyDone) {
    const node = document.getElementById('node-grammar');
    node.classList.remove('locked');
    node.querySelector('.node-icon').textContent = '📝';
    node.onclick = () => startLesson('phrase');
  }
  if (phraseDone) {
    const node = document.getElementById('node-advanced');
    node.classList.remove('locked');
    node.querySelector('.node-icon').textContent = '🚀';
    node.onclick = () => startLesson('vocab-basic'); // cycle back
  }
}

function renderWeekDots() {
  const container = document.getElementById('weekDots');
  const days = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
  const today = new Date();

  // Get last 7 days
  let html = '';
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const dateStr = d.toISOString().slice(0, 10);
    const dayLabel = days[d.getDay()];
    const isToday = i === 0;
    const isDone = S.studiedDates.includes(dateStr);

    let cls = 'week-dot';
    if (isDone) cls += ' done';
    else if (isToday) cls += ' today';

    const icon = isDone ? '✓' : isToday ? '•' : d.getDate();
    html += `<div class="${cls}">
      <div class="dot-label">${dayLabel}</div>
      <div class="dot-circle">${icon}</div>
    </div>`;
  }
  container.innerHTML = html;
}

/* ═══════════════════════════════════════════════════════
   PROFILE
═══════════════════════════════════════════════════════ */
function renderProfile() {
  document.getElementById('profileName').textContent = S.name;
  document.getElementById('profileLevel').textContent = `Trình độ ${S.level}`;
  document.getElementById('ps-streak').textContent = S.streak;
  document.getElementById('ps-xp').textContent = S.xp;
  document.getElementById('ps-learned').textContent = S.learnedWords.length;
  document.getElementById('ps-days').textContent = S.studiedDates.length;
  document.getElementById('settingName').value = S.name;
  document.getElementById('settingLevel').value = S.level;
}

function saveSettings() {
  const name = document.getElementById('settingName').value.trim();
  const level = document.getElementById('settingLevel').value;
  if (name) S.name = name;
  S.level = level;
  saveState();
  renderProfile();
  renderHome();
  showToast('✅ Đã lưu!');
}

function resetProgress() {
  if (!confirm('Xóa toàn bộ tiến độ? Không thể hoàn tác!')) return;
  const name = S.name;
  S = { ...DEFAULT_STATE, name };
  saveState();
  renderHome();
  renderProfile();
  showToast('🗑️ Đã xóa tiến độ');
}

/* ═══════════════════════════════════════════════════════
   SCREEN ROUTER
═══════════════════════════════════════════════════════ */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  if (id === 'screen-home') renderHome();
  if (id === 'screen-profile') renderProfile();
  if (id === 'screen-review') initFlashcards();
}

/* ═══════════════════════════════════════════════════════
   LESSON EXIT
═══════════════════════════════════════════════════════ */
function confirmExit() {
  document.getElementById('exitModal').classList.add('open');
}
function exitLesson() {
  closeModal('exitModal');
  showScreen('screen-home');
}
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

function goHome() { showScreen('screen-home'); }

function retryLesson() {
  startLesson(lessonState.lessonKey);
}

/* ═══════════════════════════════════════════════════════
   RESULT SCREEN
═══════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════
   UI HELPERS
═══════════════════════════════════════════════════════ */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}

function popXP(amount) {
  const el = document.createElement('div');
  el.className = 'xp-pop';
  el.textContent = `+${amount} XP ⭐`;
  const rect = document.getElementById('lessonBody').getBoundingClientRect();
  el.style.left = (rect.left + rect.width / 2 - 40) + 'px';
  el.style.top = (rect.top + 60) + 'px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1100);
}

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function escHtml(s) {
  return String(s).replace(/'/g, '&#39;').replace(/"/g, '&quot;');
}

/* ═══════════════════════════════════════════════════════
   BOOT
═══════════════════════════════════════════════════════ */
loadState();
renderHome();
showScreen('screen-home');
