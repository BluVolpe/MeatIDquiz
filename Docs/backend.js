let currentQuestionIndex = 0;
let time = 10 * 60; // 10 minutes in seconds
let timerId;
let questionsToShow = [];
let correctAnswers = 0;

// Get references to elements
const startBtn = document.querySelector("#start");
const questionsElement = document.querySelector("#questions");
const timeElement = document.querySelector("#time");
const questionNumberElement = document.querySelector("#question-number");
const questionChoices = document.querySelector("#choices");
const feedbackElement = document.querySelector("#feedback");
const endScreenEl = document.querySelector("#end-screen");
const percentageGradeEl = document.querySelector("#percentage-grade");
const restartBtn = document.querySelector("#restart");
const correctSound = document.querySelector("#correct-sound");
const wrongSound = document.querySelector("#wrong-sound");

// Shuffle questions and select 15
function shuffleAndSelectQuestions() {
  questions.sort(() => 0.5 - Math.random());
  questionsToShow = questions.slice(0, 20);
}

// Clicking "start quiz" button will start the quiz & timer
function startQuiz() {
  shuffleAndSelectQuestions();
  const startScreen = document.querySelector("#start-screen");
  startScreen.setAttribute("class", "hide");
  questionsElement.removeAttribute("class", "hide");
  timerId = setInterval(keepTime, 1000);
  updateTimerDisplay();
  getCurrentQuestion();
}

// Will cycle through questions array and present them one by one on screen
function getCurrentQuestion() {
  if (currentQuestionIndex >= questionsToShow.length) {
    endQuiz();
    return;
  }

  const currentQuestion = questionsToShow[currentQuestionIndex];
  questionNumberElement.textContent = `Question ${currentQuestionIndex + 1}`;
  const titleElement = document.querySelector("#question-title");
  titleElement.textContent = currentQuestion.question;

  questionChoices.innerHTML = "";

  currentQuestion.choice.forEach((choice, index) => {
    const userChoice = document.createElement("button");
    userChoice.setAttribute("class", "choice");
    userChoice.setAttribute("value", choice);
    userChoice.textContent = `${index + 1}. ${choice}`;

    // adding listener to question choices
    userChoice.onclick = questionClick;

    // displaying the questions
    questionChoices.appendChild(userChoice);
  });

  feedbackElement.setAttribute("class", "hide");
}

// function to move on to next question on button click
function questionClick() {
  const correctAnswer = questionsToShow[currentQuestionIndex].answer;
  const choices = document.querySelectorAll(".choice");
  let correctButton;

  choices.forEach((choice) => {
    if (choice.value === correctAnswer) {
      correctButton = choice;
    }
  });

  if (this.value !== correctAnswer) {
    time -= 10;
    feedbackElement.textContent = "Wrong!";
    feedbackElement.style.color = "red";
    correctButton.style.backgroundColor = "green";
    correctButton.style.color = "white";
    wrongSound.play();
    if (time <= 0) {
      time = 0;
    }
  } else {
    correctAnswers++;
    feedbackElement.textContent = "Correct!";
    feedbackElement.style.color = "green";
    correctSound.play();
  }
  feedbackElement.classList.remove("hide");
  feedbackElement.classList.add("feedback");

  timeElement.textContent = formatTime(time);

  setTimeout(() => {
    currentQuestionIndex++;
    getCurrentQuestion();
  }, 1500);
}

// Ends quiz and brings up "Finished" page
function endQuiz() {
  clearInterval(timerId);
  const percentageGrade = Math.round(
    (correctAnswers / questionsToShow.length) * 100
  );
  percentageGradeEl.textContent = percentageGrade;
  endScreenEl.removeAttribute("class");
  questionsElement.setAttribute("class", "hide");
}

// Timer counting down
function keepTime() {
  time--;
  updateTimerDisplay();
  if (time <= 0) {
    time = 0;
    endQuiz();
  }
}

function updateTimerDisplay() {
  timeElement.textContent = formatTime(time);
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

// start button for quiz
startBtn.onclick = startQuiz;

// restart button for quiz
restartBtn.onclick = () => {
  currentQuestionIndex = 0;
  time = 10 * 60;
  correctAnswers = 0;
  endScreenEl.setAttribute("class", "hide");
  startQuiz();
};
