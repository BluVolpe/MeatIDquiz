let currentQuestionIndex = 0; // Keeps track of the current question index
let score = 0; // Keeps track of the user's score
let timeLeft = 600; // Total time for the quiz (10 minutes in seconds)
let timerInterval; // Variable to store the timer interval
let questionsAnswered = 0; // Keeps track of the number of questions answered

// Grabbing elements from the DOM (Document Object Model)
const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const timerElement = document.getElementById("timer");
const scoreContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-button");
const questionTracker = document.getElementById("question-tally");
const questionCounter = document.getElementById("question-counter");

// Adding event listener to the restart button to restart the quiz
restartButton.addEventListener("click", restartQuiz);

// Function to shuffle the array of choices for randomness
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generate random index
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}

// Function to start the timer
function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--; // Decrease time left by 1 second
    const minutes = Math.floor(timeLeft / 60); // Calculate remaining minutes
    const seconds = timeLeft % 60; // Calculate remaining seconds
    timerElement.textContent = `${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`; // Update timer display
    if (timeLeft <= 0) {
      clearInterval(timerInterval); // Clear the interval if time runs out
      endQuiz(); // End the quiz if time runs out
    }
  }, 1000); // Execute every second
}

// Function to display the current question
function displayQuestion() {
  resetState(); // Reset the state before displaying a new question
  const currentQuestion = questions[currentQuestionIndex]; // Get the current question
  questionElement.textContent = currentQuestion.question; // Display the question text
  if (currentQuestion.image) {
    // If there is an image for the question
    const img = document.createElement("img"); // Create an image element
    img.src = currentQuestion.image; // Set the image source
    img.alt = "Question image"; // Set the image alt text
    questionElement.appendChild(img); // Append the image to the question element
  }
  shuffleArray(currentQuestion.choice); // Shuffle the choices for randomness
  currentQuestion.choice.forEach((choice, index) => {
    // For each choice
    const button = document.createElement("button"); // Create a button element
    button.textContent = choice; // Set the button text to the choice
    button.addEventListener("click", () =>
      selectAnswer(button, currentQuestion.answer)
    ); // Add event listener to select the answer
    choicesElement.appendChild(button); // Append the button to the choices element
  });
}

// Function to reset the state before displaying a new question
function resetState() {
  while (choicesElement.firstChild) {
    choicesElement.removeChild(choicesElement.firstChild); // Remove all choice buttons
  }
  const img = questionElement.querySelector("img"); // Find the image element in the question element
  if (img) {
    questionElement.removeChild(img); // Remove the image if it exists
  }
}

// Function to handle the selection of an answer
function selectAnswer(button, correctAnswer) {
  if (button.textContent === correctAnswer) {
    // If the selected answer is correct
    button.classList.add("correct"); // Add 'correct' class to the button
    score++; // Increment the score
    playSound("Sounds/correct.mp3"); // Play the correct sound
  } else {
    button.classList.add("wrong"); // Add 'wrong' class to the button
    highlightCorrectAnswer(correctAnswer); // Highlight the correct answer
    playSound("Sounds/incorrect.mp3"); // Play the incorrect sound
  }
  Array.from(choicesElement.children).forEach((btn) => {
    // For each choice button
    btn.disabled = true; // Disable the button
  });
  updateTracker(button.classList.contains("correct")); // Update the question tracker
  setTimeout(() => {
    currentQuestionIndex++; // Move to the next question
    if (currentQuestionIndex < 20) {
      displayQuestion(); // Display the next question
    } else {
      endQuiz(); // End the quiz if all questions are answered
    }
  }, 1500); // Wait 1.5 seconds before moving to the next question
}

// Function to play sound
function playSound(soundFile) {
  const audio = new Audio(soundFile); // Create a new audio element
  audio.volume = 0.2; // Set the volume to half
  audio.play(); // Play the audio
}

// Function to highlight the correct answer
function highlightCorrectAnswer(correctAnswer) {
  Array.from(choicesElement.children).forEach((button) => {
    // For each choice button
    if (button.textContent === correctAnswer) {
      button.classList.add("correct"); // Add 'correct' class to the correct answer
    }
  });
}

// Function to update the question tracker
function updateTracker(isCorrect) {
  const span = document.createElement("span"); // Create a new span element
  span.classList.add(isCorrect ? "correct" : "wrong"); // Add 'correct' or 'wrong' class based on the answer
  questionTracker.appendChild(span); // Append the span to the question tracker
  questionsAnswered++; // Increment the number of questions answered
  questionCounter.textContent = `${questionsAnswered}/20`; // Update the question counter
}

// Function to end the quiz
function endQuiz() {
  clearInterval(timerInterval); // Clear the timer interval
  quizContainer.style.display = "none"; // Hide the quiz container
  scoreContainer.style.display = "block"; // Show the score container
  const percentageScore = (score / 20) * 100; // Calculate the percentage score
  scoreElement.textContent = `${percentageScore}%`; // Display the percentage score
}

// Function to restart the quiz
function restartQuiz() {
  currentQuestionIndex = 0; // Reset the current question index
  score = 0; // Reset the score
  timeLeft = 600; // Reset the time left
  questionsAnswered = 0; // Reset the number of questions answered
  questionTracker.innerHTML = ""; // Clear the question tracker
  questionCounter.textContent = `${questionsAnswered}/20`; // Reset the question counter
  quizContainer.style.display = "block"; // Show the quiz container
  scoreContainer.style.display = "none"; // Hide the score container
  shuffleArray(questions); // Shuffle the questions
  displayQuestion(); // Display the first question
  startTimer(); // Start the timer
}

// Event listener to start the quiz when the DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  shuffleArray(questions); // Shuffle the questions
  displayQuestion(); // Display the first question
  startTimer(); // Start the timer
});
