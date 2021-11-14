const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const score = document.querySelector('#score');

let currrentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = {}

let questions = [{
    question: 'Which of the following is the capital city of Sweden?',
    choice1: 'Stockholm',
    choice2: 'Malmö',
    choice3: 'Göteborg',
    answer: 1,
}, {
    question: 'Sweden is known as the fifth largest country in Europe, how many approximately lives in Sweden?',
    choice1: '10.5 million',
    choice2: '9 million',
    choice3: '11 million',
    answer: 1,
}, {
    question: 'A common perception of sweden is that all you see is forrest, how many procent of Swedens surface is covered by forrest?',
    choice1: '80 percent',
    choice2: '75 percent',
    choice3: '70 percent',
    answer: 3,
}, {
    question: 'Swedes love their "fika", what is the meaning behind the concept?',
    choice1: 'A coffee and conversation with a friend',
    choice2: 'A coffee with a sweet on the side',
    choice3: 'A coffee with sugar',
    answer: 2,
}, {
    question: 'Swedes have long been known for social distancing, how many procent of sweden is uninhabited?',
    choice1: '74 percent',
    choice2: '82 percent',
    choice3: '97 percent',
    answer: 3,
}]

const SCORE_POINTS = 10
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = (...questions)
    getNewQuestion()
}
getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTION) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')

    }
    questionCounter++
    progressText.innerText = 'question ${questionCounter} of ${MAX_QUESTION}'

    const questionIndex = Math.floor(Math.random() = availableQuestions.length)
    currrentQuestion = availableQuestions(questionIndex)
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset('number')
        choice.innerText = currentQuestion('choice' + number)
    })
    availableQuestions.splice(questionsIndex, 1)
    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }


    })
})




//console.log('testing');
//var city = document.getElementsByName("city");
//var score = 0;
//var scoreEl = document.getElementById("score");

//var getCity = function (e) {
//  var value = e.target.value;
//if (value === 'Stockholm') {
//  alert("Right answer");
//score = score + 1;
//scoreEl.innerHTML = score;
// } else {
//   if (score > 0) {
//     score = score - 1;
// }
// }
//}

//var city = document.getElementById('city');
//var getCity = function (e) {
//  console.log(e.target.value);
//}

//city.addEventListener('input', getCity);


//let myQuiz = document.getElementById('quiz');
//let myResults = document.getElementById('results');
//let myScore = document.getElementById("score");

//function check() {
//  var c = 0;
// var q1 = document.quiz.q1.value;
//var q2 = document.quiz.q2.value;
//var q3 = document.quiz.q3.value;
//var q4 = document.quiz.q4.value;
//var q5 = document.quiz.q5.value;
//if (q1 == "stockholm")(++c);
//if (q2 == "10.5m")(++c);
//if (q3 == "70p")(++c);
//if (q4 == "coffee2")(++c);
//if (q5 == "97p")(++c);

// document.write(c);

//myQuiz.style.display = "none";
// myResults.style.display = "block";
//myScore.innerHTML = c;


// }