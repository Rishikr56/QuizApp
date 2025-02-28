const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
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
let currentQuestionIndex = 0;
let score = 0;

document.addEventListener("DOMContentLoaded",function(e){
    startBtn.addEventListener("click",()=>{
        startBtn.classList.add("hidden");
        showQuestion();
        scoreCal();

    })

})

function scoreCal(){
    choicesList.addEventListener("click",function(event){
        if(event.target.textContent === questions[currentQuestionIndex].answer){
            console.log(event.target.textContent);
            score++;
            nextButtonHandle();
        }
        else{
            score = score + 0;
        }
    })
}

function showQuestion(){
    questionContainer.classList.remove("hidden");
    //sabse flushout the choices
    choicesList.innerHTML = "";
    questionText.textContent = questions[currentQuestionIndex].question;
    questions[currentQuestionIndex].choices.forEach(e=>{
        const cText = document.createElement("li");
        cText.textContent = e;
        choicesList.appendChild(cText);
    })


}

function nextButtonHandle(){
    nextBtn.classList.remove("hidden");
    nextBtn.addEventListener("click",()=>{
        showQuestion();
    })
}