const questions = [
  {
    question: "What is the difference between var and let?",
    choices: [
      "The basic difference is es5 and es6",
      "London",
      "Berlin",
      "Madrid",
    ],
    answer: "The basic difference is es5 and es6",
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "Who wrote 'Hamlet'?",
    choices: [
      "Charles Dickens",
      "Jane Austen",
      "William Shakespeare",
      "Mark Twain",
    ],
    answer: "William Shakespeare",
  },
];

const startBtn = document.getElementById("start-btn");
const questionContainer = document.getElementById("question-container");
const questionText = document.getElementById("question-text");
const choicesList = document.getElementById("choices-list");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const ScoreHtml = document.getElementById("score");
let currentQuestionIndex = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", function () {
  startBtn.addEventListener("click", () => {
    startBtn.classList.add("hidden");
    //
    questionContainer.classList.remove("hidden");
    showQuestion();
  });
});

function showQuestion() {
  nextBtn.classList.add("hidden");
  questionText.textContent = questions[currentQuestionIndex].question;
  choicesList.innerHTML = "";

  questions[currentQuestionIndex].choices.forEach(function (aChoice) {
    const li = document.createElement("li");
    li.textContent = aChoice;
    choicesList.appendChild(li);
  });
  selectAns();
}

function selectAns() {
  choicesList.addEventListener("click", (event) => {
    if (event.target.textContent === questions[currentQuestionIndex].answer) {
      score++;
    } else {
      score += 0;
    }
    nextBtn.classList.remove("hidden");
  });
  nextBtnExecution();
}

function nextBtnExecution() {
    
    nextBtn.addEventListener("click",function(){
      currentQuestionIndex++;
      if(currentQuestionIndex < questions.length){
        showQuestion();
      }
      else{
        nextBtn.classList.add("hidden");
        resultContainer.classList.remove("hidden");
        startBtn.classList.add("hidden");
        questionContainer.classList.add("hidden");
        ScoreHtml.textContent = `${score}`;
      }
    },{once:true})
}


const restartBtn = document.getElementById("restart-btn");

restartBtn.addEventListener("click",function(){
  // location.reload();
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.classList.add("hidden");
  resultContainer.classList.add("hidden");
  startBtn.classList.remove("hidden");
  questionContainer.classList.add("hidden");
  
})
