let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 600; // 10 minutes in seconds
let timerInterval;
let questionsAnswered = 0;

const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const timerElement = document.getElementById("timer");
const scoreContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-button");
const questionTracker = document.getElementById("question-tally");
const questionCounter = document.getElementById("question-counter");

restartButton.addEventListener("click", restartQuiz);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

function displayQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  if (currentQuestion.image) {
    const img = document.createElement("img");
    img.src = currentQuestion.image;
    img.alt = "Question image";
    questionElement.appendChild(img);
  }
  shuffleArray(currentQuestion.choice);
  currentQuestion.choice.forEach((choice, index) => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.addEventListener("click", () =>
      selectAnswer(button, currentQuestion.answer)
    );
    choicesElement.appendChild(button);
  });
}

function resetState() {
  while (choicesElement.firstChild) {
    choicesElement.removeChild(choicesElement.firstChild);
  }
  const img = questionElement.querySelector("img");
  if (img) {
    questionElement.removeChild(img);
  }
}

function selectAnswer(button, correctAnswer) {
  if (button.textContent === correctAnswer) {
    button.classList.add("correct");
    score++;
    playSound("Sounds/correct.mp3");
  } else {
    button.classList.add("wrong");
    highlightCorrectAnswer(correctAnswer);
    playSound("Sounds/incorrect.mp3");
  }
  Array.from(choicesElement.children).forEach((btn) => {
    btn.disabled = true;
  });
  updateTracker(button.classList.contains("correct"));
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < 20) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }, 1500);
}

function playSound(soundFile) {
  const audio = new Audio(soundFile);
  audio.volume = 0.5; // Set volume to half
  audio.play();
}

function highlightCorrectAnswer(correctAnswer) {
  Array.from(choicesElement.children).forEach((button) => {
    if (button.textContent === correctAnswer) {
      button.classList.add("correct");
    }
  });
}

function updateTracker(isCorrect) {
  const span = document.createElement("span");
  span.classList.add(isCorrect ? "correct" : "wrong");
  questionTracker.appendChild(span);
  questionsAnswered++;
  questionCounter.textContent = `${questionsAnswered}/20`;
}

function endQuiz() {
  clearInterval(timerInterval);
  quizContainer.style.display = "none";
  scoreContainer.style.display = "block";
  const percentageScore = (score / 20) * 100;
  scoreElement.textContent = `${percentageScore}%`;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 600;
  questionsAnswered = 0;
  questionTracker.innerHTML = "";
  questionCounter.textContent = `${questionsAnswered}/20`;
  quizContainer.style.display = "block";
  scoreContainer.style.display = "none";
  shuffleArray(questions);
  displayQuestion();
  startTimer();
}

document.addEventListener("DOMContentLoaded", () => {
  shuffleArray(questions);
  displayQuestion();
  startTimer();
});
