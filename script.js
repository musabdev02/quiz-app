// introduction
const introduction = document.getElementById("introduction");
const startBtn = document.getElementById("startBtn");
// main
const main = document.getElementById("main");
let numberOfQ = document.getElementById("numberOfQ");
let displayQuestion = document.getElementById("displayQuestion");
let optionsSecl = document.querySelector(".options");
const liButtons = optionsSecl.querySelectorAll("li");
const continueGame = document.querySelector(".btns");
// result
const result = document.getElementById("result");
let resultTitle = document.getElementById("resultTitle");
let result_img = document.getElementById("result_img");
let finalScore = document.getElementById("finalScore");
let totalQuizs = document.getElementById("totalQuizs");
let loseMsg = document.getElementById("loseMsg");
const playAgain = document.getElementById("playAgain");


// Others
let indexOfQ = 0;
let userScore = 0;

const quizQuestions = [
    {
      question: "What is the capital city of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      correctAnswer: "Canberra",
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "South Korea", "Japan", "Thailand"],
      correctAnswer: "Japan",
    },
    {
      question: "What is the largest desert in the world?",
      options: ["Sahara Desert", "Antarctica", "Gobi Desert", "Kalahari Desert"],
      correctAnswer: "Antarctica",
    },
    {
      question: "Which river is the longest in the world?",
      options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
      correctAnswer: "Nile",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
      correctAnswer: "Leonardo da Vinci",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Mercury"],
      correctAnswer: "Mars",
    },
    {
      question: "What is the smallest country in the world by area?",
      options: ["Monaco", "San Marino", "Liechtenstein", "Vatican City"],
      correctAnswer: "Vatican City",
    },
    {
      question: "Which is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      correctAnswer: "Pacific Ocean",
    },
    {
      question: "In which year did World War II end?",
      options: ["1945", "1939", "1941", "1948"],
      correctAnswer: "1945",
    },
    {
      question: "Which is the only continent without snakes?",
      options: ["Europe", "Antarctica", "Asia", "North America"],
      correctAnswer: "Antarctica",
    },
    {
      question: "Who discovered penicillin?",
      options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Isaac Newton"],
      correctAnswer: "Alexander Fleming",
    },
    {
      question: "Which language has the most native speakers in the world?",
      options: ["English", "Mandarin", "Spanish", "Urdu"],
      correctAnswer: "Mandarin",
    },
    {
      question: "Which is the highest mountain in the world?",
      options: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"],
      correctAnswer: "Mount Everest",
    },
    {
      question: "What is the currency of Japan?",
      options: ["Yen", "Won", "Baht", "Rupee"],
      correctAnswer: "Yen",
    },
    {
      question: "Which is the longest wall in the world?",
      options: ["Berlin Wall", "Great Wall of China", "Hadrian's Wall", "Western Wall"],
      correctAnswer: "Great Wall of China",
    },
    {
      question: "What is the main ingredient in guacamole?",
      options: ["Tomato", "Avocado", "Onion", "Cucumber"],
      correctAnswer: "Avocado",
    },
    {
      question: "Which metal is the best conductor of electricity?",
      options: ["Gold", "Silver", "Copper", "Platinum"],
      correctAnswer: "Silver",
    },
    {
      question: "What is the national animal of Canada?",
      options: ["Moose", "Beaver", "Bear", "Eagle"],
      correctAnswer: "Beaver",
    },
    {
      question: "Which gas do plants primarily use during photosynthesis?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      correctAnswer: "Carbon Dioxide",
    },
    {
      question: "What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Quartz"],
      correctAnswer: "Diamond",
    },
];
  
// display the questions & result 
const startGame = () =>{
  if(indexOfQ !== quizQuestions.length){
    numberOfQ.textContent = indexOfQ+1;
    displayQuestion.textContent = quizQuestions[indexOfQ].question;
    quizQuestions[indexOfQ].options.forEach((option, i) => {
        if (liButtons[i]) { 
          liButtons[i].textContent = option; 
        };
    });
  }else{
    main.style.display = "none";
    result.style.display = "block";
    totalQuizs.textContent = quizQuestions.length;
    finalScore.textContent =  userScore;
    if(userScore > 15){
      result_img.src = "/assets/win.png";
      resultTitle.textContent = "Congrats!";
      loseMsg.style.display = "none";
    }
    else{
      result_img.src = "/assets/lose.png";
      resultTitle.textContent = "You Lose!";
      loseMsg.style.display = "block";
    }
  }
 
};

// check the user's input
optionsSecl.addEventListener("click", (elem)=>{
  let userAns = elem.target.textContent;
  if(userAns === quizQuestions[indexOfQ].correctAnswer){
      userScore++;
      elem.target.classList.add("greenAns");
  }
  else{
      elem.target.classList.add("redAns");
      const correctOption = Array.from(optionsSecl.children).find(
          (option) => option.textContent === quizQuestions[indexOfQ].correctAnswer
      );
      if (correctOption) {
          correctOption.classList.add("greenAns"); 
      }
  }

  continueGame.style.display = "block";            

});

// continue the game!
continueGame.addEventListener("click", ()=>{
    indexOfQ++
    Array.from(optionsSecl.children).forEach((option) => {
        option.classList.remove("greenAns", "redAns"); 
    });
    continueGame.style.display = "none";
    if(indexOfQ <= quizQuestions.length){
        startGame();      
    }
})

// start the game
startBtn.addEventListener("click", ()=>{
    introduction.style.display = "none";
    main.style.display = "flex";
    startGame();
});

// restart the game
playAgain.addEventListener("click", ()=>{
  indexOfQ = 0;
  userScore = 0;
  main.style.display = "flex";
  result.style.display = "none";
  startGame();
});