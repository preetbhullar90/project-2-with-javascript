const howStarts=document.getElementById('how-start')
const starts=document.getElementById('starts')
const correctAnswer = document.getElementById('correct')
const wrongAnswer = document.getElementById('wrong')
const questionNumbers = document.getElementById('question-numbers')
const questionContainer = document.getElementById('question-container')
const startGame = document.getElementById('start-btn');
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionContainer = document.getElementById('option-container');
const answerIndicatorContainer = document.getElementById('answers-indicator');
const progressBar = document.getElementById("myprogressBar");
const homeBtn = document.getElementById('home-button')
const timeLeft = document.getElementById('count')
const gameOver = document.getElementById('game')
const closeBtn = document.getElementById('close-btn')
const homeBox=document.getElementById('home-box')
const resultContainer=document.getElementById('result-container')
const correctSound=document.getElementById('correct-sound')
const wrongSound=document.getElementById('wrong-sound')
const homeButton = document.getElementById('fullReset');
const inputs=document.getElementById('inputss')
const usernameSubmitButton = document.getElementById('username_submit');
const userName = document.getElementById("myText");
const ratingEmoji=document.querySelectorAll('.rating-emoji')
const btn=document.getElementById('send')
const feedback=document.getElementById('feedback')

/* for fully loaded document without waiting */
document.addEventListener('DOMContentLoaded', function(){
  
    starts.addEventListener('click',start)
    howStarts.addEventListener('click',howStart)
    usernameSubmitButton.addEventListener('click',userNames)
    
    });


    /*  Quiz starting block*/ 

function start(){
    startGame.classList.add('hide')
   homeBtn.classList.remove('hide')
   questionContainer.classList.remove('hide')
    update = setInterval('timer()', oneSecond)
   newQuestions()
   timers();
}