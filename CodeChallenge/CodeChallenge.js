response_code: 0;
 let results = [
    {
      category: "Sports",
      type: "multiple",
      difficulty: "easy",
      question: "Which team won the 2015-16 English Premier League?",
      correct_answer: "Leicester City",
      incorrect_answers: ["Liverpool", "Cheslea", "Manchester United"],
    },
    {
      category: "Sports",
      type: "multiple",
      difficulty: "easy",
      question: "In baseball, how many fouls are an out?",
      correct_answer: "0",
      incorrect_answers: ["5", "3", "2"],
    },
    {
      category: "Sports",
      type: "multiple",
      difficulty: "easy",
      question:
        "In Baseball, how many times does the ball have to be pitched outside of the strike zone before the batter is walked?",
      correct_answer: "4",
      incorrect_answers: ["1", "2", "3"],
    },
    {
      category: "Sports",
      type: "multiple",
      difficulty: "easy",
      question: "The Los Angeles Dodgers were originally from what U.S. city?",
      correct_answer: "Brooklyn",
      incorrect_answers: ["Las Vegas", "Boston", "Seattle"],
    },
   
  ]

// console.log(typeof results);

function displayData (){
    let quiz = document.getElementById('quiz');
    quiz.innerHTML= ''
    for(let i = 0; i<results.length; i++){
        const result = results[i];
        let HTML = `
        <div class="question">${result.question}</div>
    
    <div class="answer_option">
        <div class="option" onclick="pickAnswer('${result.correct_answer}')" >${result.correct_answer}</div>
        <div class="option" onclick="pickAnswer('${result.incorrect_answers}')">${result.incorrect_answers[0]}</div>
        <div class="option" onclick="pickAnswer('${result.incorrect_answers}')">${result.incorrect_answers[1]}</div>
        <div class="option" onclick="pickAnswer('${result.incorrect_answers}')">  ${result.incorrect_answers[2]}</div>

    </div>
    <div id="correctAnswer">${result.correct_answer}</div>
        `
        quiz.innerHTML += HTML
    }

}
displayData()
let point = 0
function pickAnswer(answer){
    // console.log(correctAnswer);

    // console.log(correctAnswer);

    for(let i = 0 ; i<results.length ;i++){
        let correctAnswer =results[i].correct_answer
    if(answer == correctAnswer){
        alert("You are correct")
        point+=10;

    }        

    
}
console.log(`You have ${point} points`);
}
