/*  All const variables */
const howStarts = document.getElementById('how-start');
const starts = document.getElementById('starts');
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
const closeBtn = document.getElementById('close-btn');
const resultContainer = document.getElementById('result-container');
const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');
const homeButton = document.getElementById('fullReset');
const inputs = document.getElementById('inputss');
const usernameSubmitButton = document.getElementById('username_submit');
const userName = document.getElementById("myText");
const ratingEmoji = document.querySelectorAll('.rating-emoji');
const btn = document.getElementById('send');
const feedback = document.getElementById('feedback');

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
let correctAnswers = 0;
let wrongAnswers = 0;

/* for fully loaded document without waiting */

document.addEventListener('DOMContentLoaded', function () {
    starts.addEventListener('click', start);
    howStarts.addEventListener('click', howStart);
    usernameSubmitButton.addEventListener('click', userNames);
    homeButton.addEventListener('click', function (e) {
        location.reload();
    }, false);
});


/*  Quiz starting block*/

function start() {
    startGame.classList.add('hide');
    homeBtn.classList.remove('hide');
    questionContainer.classList.remove('hide');
    update = setInterval('timer()', oneSecond);
    newQuestions();
    timers();
};

/* how to play paragraph function */

function howStart() {
    questionContainer.classList.add('hide');
    starts.classList.add('already-answered');
    howStarts.classList.add('already-answered');
    closeBtn.classList.remove('hide');
};

/* Function for answer indicator(create div) and image */
function answerIndicator() {
    answerIndicatorContainer.innerHTML = '';
    for (let i = 0; i < questions.length; i++) {
        const indicator = document.createElement('div');
        answerIndicatorContainer.appendChild(indicator);
    };
};
answerIndicator();

/* Function for update answer with colour and get new question */
function updateAnswerIndicator(markType) {
    answerIndicatorContainer.children[questionCounter - 1].classList.add(markType);
};


/* Function for get all the questions from footballquizquestions.js file */
function allAvailableQuestion() {
    questions.forEach(element => {
        availableQuestion.push(element);
    });
    /* Show length of questions in the start block  */
    questionNumbers.innerHTML = (questionCounter + 1) + ' of ' + questions.length;

};
allAvailableQuestion();

/* Function for get Random new question evry time */
function newQuestions() {
    /* questions number counter according to the questions length in questions options container */
    questionNumber.innerHTML = 'Question ' + (questionCounter + 1) + ' of ' + questions.length;
    if (availableQuestion.length === 0 || questionCounter >= questions) {
        clearInterval(update)
    };
    /* create random question */
    const allQuestionsIndex = availableQuestion[Math.floor(Math.random() * availableQuestion.length)];
    currentQuestion = allQuestionsIndex;

    /* show only question in innerhtml from questions file */
    questionText.innerHTML = currentQuestion.q;
    let index1 = availableQuestion.indexOf(allQuestionsIndex);
    /* delete question evry single time which is shown to user,stop to repeat same question second time */
    availableQuestion.splice(index1, 1);
    const choiceLen = currentQuestion.choices.length;
    for (let i = 0; i < choiceLen; i++) {
        availableChoices.push(i);
    };
    /* empty option container after evry question */
    optionContainer.innerHTML = '';

    let animationDelay = 0.15;
    for (let i = 0; i < choiceLen; i++) {

        /* create only random choice from all questions file */
        const choiceIndex = availableChoices[Math.floor(Math.random() * availableChoices.length)];
        const index2 = availableChoices.indexOf(choiceIndex);
         /* delete choice evry single time which is shown to user,stop to repeat same choices second time */
        availableChoices.splice(index2, 1);
        const choice = document.createElement('div');
        choice.innerHTML = currentQuestion.choices[choiceIndex];
        choice.id = choiceIndex;
        choice.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.15;
        choice.className = 'choice';
        optionContainer.appendChild(choice);
        choice.setAttribute('onclick', 'allResult(this)');

    };

    questionCounter++
    /* Progress bar increase according to the question length */
    progressBar.style.width = `${(questionCounter / questions.length) * 100}%`;
    timers();

};

/* This function show result with correct and incorrect answer */
function allResult(element) {
    /* questions and choices match with correct answer */
    const id = parseInt(element.id);
    if (id === currentQuestion.answer) {
        /* change colour green of correct choice */
        element.classList.add('green');
        correctAnswer.innerHTML = answerCounter + 1;
        answerCounter++;
        /* correct answer increment by 1 */
        correctAnswers++
        /* play sound with right answer */
        correctSound.play();
        updateAnswerIndicator('green');
    } else {
        /* change colour red of incorrect choice */
     element.classList.add('red');
        wrongAnswer.innerHTML = wrongAnswerCounter + 1;
        wrongAnswerCounter++;
        /* incorrect answer increment by 1 */
         wrongAnswers++;
         /* play sound with wrong answer */
         wrongSound.play();
        updateAnswerIndicator('red');
        const choiceLen = optionContainer.children.length;
        for (let i = 0; i < choiceLen; i++) {
            /* show right answer with colour green if user click on wrong answer  */
            if (parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
                optionContainer.children[i].classList.add('green');
            } else {
                unclickableChoice();
               
            };
        };
    };

/* Function for time, Time run 20second per question  */
setTimeout(function () {
    /* when all the questions finished */
        if (questionCounter === questions.length) {
            unclickableChoice();
            gameover();
            clearInterval(update);
            
        } else {
         
           
            newQuestions();
        };

    }, questionDelay);
};

/* function for just choose single option other all will be unclickable */
function unclickableChoice() {
    const choiceLen = optionContainer.children.length;
   for(let i in choiceLen){
        optionContainer.children[i].classList.add('already-answered');
    };
};


/* Restart time with every single question */
function timer() {
    time--;
    if (time) {
        /* show time with clock logo and seconds in innerhtml */
        timeLeft.innerHTML = ` <i class="fas fa-clock"></i> : ${time - 1} seconds`;
    }else if (time <= 0) {
        timers();
        newQuestions();
        
    };
};

/* time seconds */
function timers() {
    time = 21;
};

/* When all the questions finished this function show and hide classes */
function gameover(){
    questionContainer.classList.add('hide');
    feedback.classList.remove('hide');
    inputs.classList.remove('hide');
    startGame.classList.add('hide');
    gameResult();
    };
    
    /* Get the right and wrong answer length at the end of all the questions */
    function gameResult(){
        /* Total questions length */
       resultContainer.querySelector('#total-question').innerHTML=questions.length;
       /* all correct answer length */
       resultContainer.querySelector('.total-correct').innerHTML=correctAnswers;
       /* All wrong answer length */
       resultContainer.querySelector('.total-wrong').innerHTML=wrongAnswers;
    };