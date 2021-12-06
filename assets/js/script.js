var startbtn = document.getElementById("startbtn")
console.log("javascript loaded");
var quizContainer = document.querySelector(".quiz-container")
var question = document.getElementById("question")
var option1 = document.getElementById("option1")
var option2 = document.getElementById("option2")
var option3 = document.getElementById("option3")
var option4 = document.getElementById("option4")
var answer = document.querySelector(".options")

option1.addEventListener("click", checkAnswer);
option2.addEventListener("click", checkAnswer);
option3.addEventListener("click", checkAnswer);
option4.addEventListener("click", checkAnswer);

quizContainer.style.display="none"

startbtn.addEventListener("click",function() {
    quizContainer.style.display="block"
    startbtn.style.display="none"
   

 displayQuestion ();
})

var questionList = [
    {
        question: "1. How do you call a JS function?",
        choiceA: ".class()",
        choiceB: ".function()",
        choiceC: "function()",
        choiceD: "=.function()",
        answer:3
    },
    {
        question: "2. What does JavaScript do ?",
        choiceA: "It is the scripting language that allow you to create complex features on web pages",
        choiceB: "It is the styling of a web page",
        choiceC: "It's the words on the web page",
        choiceD: "It answers questions",
        answer:1
    },
    {
        question: "3. How do you link JS to your HTML Page?",
        choiceA: "Add a file to your main folder",
        choiceB: "By using <script> to link to the bottom of the html file",
        choiceC: "ctrl c, ctrl v in the html file",
        choiceD: "drag and drop the link in your css stylesheet",
        answer:2
    },
    {
        question: "4. What is Vanilla JavaScript?",
        choiceA: "Adding white font to your web page",
        choiceB: "Legacy coding",
        choiceC: "combining CSS & JavaScript",
        choiceD: "As is, not changing any tool while coding",
        answer:4
    },
    {
        question: "5. What is JQuery?",
        choiceA: "Classes and event list",
        choiceB: "Hyper text markup language",
        choiceC: "A software that ask questions",
        choiceD: "A JavaScript library",
        answer:4
    }
]

 var currentQuestion = 0;

function displayQuestion() {
question.textContent=questionList[currentQuestion].question
option1.textContent=questionList[currentQuestion].choiceA
option2.textContent=questionList[currentQuestion].choiceB
option3.textContent=questionList[currentQuestion].choiceC
option4.textContent=questionList[currentQuestion].choiceD
}
function checkAnswer (){
var userAnswer = this.getAttribute("data-value");
if (userAnswer==questionList[currentQuestion].answer){
    answer.textContent="You got it Correct!"
}
else {answer.textContent="Sorry, Incorrect"
}
if(currentQuestion<questionList.length-1){
    currentQuestion++
    displayQuestion();
}else{
    quizContainer.style.display="none"
    alert("end of quiz")
}
}
// Setup timer: document.getElementById("demo").innerHTML = + seconds + "s";
//var seconds = Math.floor((15000 % (1000 * 60)) / 1000);

//Setup storage for score and user name