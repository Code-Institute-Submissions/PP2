console.log('testing');
var city = document.getElementsByName("city");
var score = 0;
var scoreEl = document.getElementById("score");

var getCity = function (e) {
    var value = e.target.value;
    if (value === 'Stockholm') {
        alert("Right answer");
        score = score + 1;
        scoreEl.innerHTML = score;
    } else {
        if (score > 0) {
            score = score - 1;
        }
    }
}

var city = document.getElementById('city');
var getCity = function (e) {
    console.log(e.target.value);
}

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