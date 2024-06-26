function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

function buildQuiz() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';
    shuffleArray(quizData); // Shuffle the questions
    let displayedQuestions = quizData.slice(0, 15); // Take only the first 15 questions from the shuffled array
    displayedQuestions.forEach((item, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `
            <h4>Q${index + 1}: ${item.question}</h4>
            <label><input type="radio" name="question${index}" value="a"> ${item.a}</label><br>
            <label><input type="radio" name="question${index}" value="b"> ${item.b}</label><br>
            <label><input type="radio" name="question${index}" value="c"> ${item.c}</label><br>
            <label><input type="radio" name="question${index}" value="d"> ${item.d}</label><br>
        `;
        quizContainer.appendChild(questionDiv);
    });
}

window.onload = buildQuiz;

