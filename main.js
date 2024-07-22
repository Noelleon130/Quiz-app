const questions = [
  {
    question: "What is the Capital of Cameroon?",
    answers: [
      { text: "Yaounde", correct: true },
      { text: "Douala", correct: false },
      { text: "Buea", correct: false },
      { text: "Garoua1", correct: false },
    ],
  },
  {
    question: "What is the Capital of Senegal?",
    answers: [
      { text: "KIgali", correct: false },
      { text: "Dakar", correct: true },
      { text: "Djibouti", correct: false },
      { text: "Accra", correct: false },
    ],
  },
  {
    question: "What is the Capital of Nigeria?",
    answers: [
      { text: "Lagos", correct: false },
      { text: "Abakaliki", correct: false },
      { text: "Abuja", correct: true },
      { text: "Ikorodu", correct: false },
    ],
  },
  {
    question: "What is the Capital of Algeria",
    answers: [
      { text: "Lagos", correct: false },
      { text: "Algiers", correct: true },
      { text: "Abuja", correct: false },
      { text: "Miami", correct: false },
    ],
  },
  {
    question: "What is the Capital of USA",
    answers: [
      { text: "Washington", correct: false },
      { text: "Washington DC", correct: true },
      { text: "Tampa", correct: false },
      { text: "Miami", correct: false },
    ],
  },
  {
    question: "What is the Capital of Ghana",
    answers: [
      { text: "Kumassi", correct: false },
      { text: "Accra", correct: true },
      { text: "Ktown", correct: false },
      { text: "Brussels", correct: false },
    ],
  },
  {
    question: "What is the Capital of Etiopia",
    answers: [
      { text: "Adis", correct: false },
      { text: "Miami", correct: false },
      { text: "Adis Ababa", correct: true },
      { text: "Braserville", correct: false },
    ],
  },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// Changing question index
let currentQuestionIndex = 0;
let score = 0;

// Start quiz area
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
// showQuestion
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    // Check the correct answer
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

// fuction to clear hard coded answers from html
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

//  selecting te correct  anaswer
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  //   end of selecting the correct answer

  //  preventing multiple selection of answers
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block"
  //  end here for multiple selct prevent
}
// function to show the Score
function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of a possble ${questions.length}   questions`;
  nextButton.innerHTML = "Start again";
  nextButton.style.display = "block";
}
// nextButton questions
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
  // end of nextButton questions
}
//  click action to go the ext question
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
