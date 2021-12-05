var startbtn = document.getElementById("startbtn")
console.log("javascript loaded");
var quizContainer = document.querySelector(".quiz-container")
var question = document.getElementById("question")
var option1 = document.getElementById("option1")
var option2 = document.getElementById("option2")
var option3 = document.getElementById("option3")
var option4 = document.getElementById("option4")
var answer = document.querySelector(".options")
quizContainer.style.display="none"

startbtn.addEventListener("click",function() {
    quizContainer.style.display="block"
    startbtn.style.display="none"

 displayQuestion ();
})


var questionList = [
    {
        question: "1. What is HTML?",
        choiceA: "Hyper tension Markup language",
        choiceB: "Hyper Active Markup language",
        choiceC: "Hypertext markup language",
        choiceD: "Historic markup language",
        answer:3
    },
    {
        question: "2. What is HTML?",
        choiceA: "Hyper tension Markup language",
        choiceB: "Hyper Active Markup language",
        choiceC: "Hypertext markup language",
        choiceD: "Historic markup language",
        answer:3
    },
    {
        question: "3. What is HTML?",
        choiceA: "Hyper tension Markup language",
        choiceB: "Hyper Active Markup language",
        choiceC: "Hypertext markup language",
        choiceD: "Historic markup language",
        answer:3
    },
    {
        question: "4. What is HTML?",
        choiceA: "Hyper tension Markup language",
        choiceB: "Hyper Active Markup language",
        choiceC: "Hypertext markup language",
        choiceD: "Historic markup language",
        answer:3
    },
    {
        question: "5. What is HTML?",
        choiceA: "Hyper tension Markup language",
        choiceB: "Hyper Active Markup language",
        choiceC: "Hypertext markup language",
        choiceD: "Historic markup language",
        answer:3
    },
]
 var currentQuestion = 0;

function displayQuestion() {
question.textContent=questionList[currentQuestion].question
option1.textContent=questionList[currentQuestion].choiceA
option2.textContent=questionList[currentQuestion].choiceB
option3.textContent=questionList[currentQuestion].choiceC
option4.textContent=questionList[currentQuestion].choiceD
}