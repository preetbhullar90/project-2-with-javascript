/*  All const variables */
const howStarts=document.getElementById('how-start');
const starts=document.getElementById('starts');
const correctAnswer = document.getElementById('correct');
const wrongAnswer = document.getElementById('wrong');
const questionNumbers = document.getElementById('question-numbers');
const questionContainer = document.getElementById('question-container');
const startGame = document.getElementById('start-btn');
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionContainer = document.getElementById('option-container');
const answerIndicatorContainer = document.getElementById('answers-indicator');
const progressBar = document.getElementById("myprogressBar");
const homeBtn = document.getElementById('home-button');
const timeLeft = document.getElementById('count');
const gameOver = document.getElementById('game');
const closeBtn = document.getElementById('close-btn');
const homeBox=document.getElementById('home-box');
const resultContainer=document.getElementById('result-container');
const correctSound=document.getElementById('correct-sound');
const wrongSound=document.getElementById('wrong-sound');
const homeButton = document.getElementById('fullReset');
const inputs=document.getElementById('inputss');
const usernameSubmitButton = document.getElementById('username_submit');
const userName = document.getElementById("myText");
const ratingEmoji=document.querySelectorAll('.rating-emoji');
const btn=document.getElementById('send');
const feedback=document.getElementById('feedback');

/*  All let variables */
let questionDelay = 300;
let oneSecond = 1000;
let time = 20;
let answerCounter = 0;
let wrongAnswerCounter = 0;
let questionCounter = 0;
let currentQuestion;
let availableQuestion = [];
let availableChoices = [];
let correctAnswers=0;
let wrongAnswers=0;

/* for fully loaded document without waiting */

document.addEventListener('DOMContentLoaded', function(){
   starts.addEventListener('click',start);
    howStarts.addEventListener('click',howStart);
    usernameSubmitButton.addEventListener('click',userNames);
 });


    /*  Quiz starting block*/

function start(){
    startGame.classList.add('hide');
   homeBtn.classList.remove('hide');
   questionContainer.classList.remove('hide');
    update = setInterval('timer()', oneSecond);
   newQuestions();
   timers();
}

/* how to play paragraph function */

function howStart() {
    questionContainer.classList.add('hide');
    starts.classList.add('already-answered');
    howStarts.classList.add('already-answered');
    closeBtn.classList.remove('hide');
}

/* Function for answer indicator(create div) and image */
function answerIndicator(){
   answerIndicatorContainer.innerHTML='';
    for(let i=0;i<questions.length;i++){
       const indicator=document.createElement('div'); 
       answerIndicatorContainer.appendChild(indicator);
    }
}
answerIndicator();

/* Function for update answer with colour and get new question */
function updateAnswerIndicator(markType){
    answerIndicatorContainer.children[questionCounter-1].classList.add(markType);
}


/* Fonction for get all the questions from questions js file */
function allAvailableQuestion() {
questions.forEach(element=>{
    availableQuestion.push(element)  
})
     /* Show length of questions in the start block  */
    questionNumbers.innerHTML =(questionCounter + 1) + ' of ' + questions.length;
   
}
allAvailableQuestion();