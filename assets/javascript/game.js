$(document).ready(function () {

  // create global game variables

  var correctAnswers = 0;
  var wrongAnswers = 0;
  var countdown = 301;
  var intervalID;
  var clockRunning = false;

  // create array of objects containing questions and their answers:

  var questionBank = [

    {
      question: "Warsaw is the capitol of what country?",
      answers: ["Poland", "Germany", "Austria", "Russia"],
      rightAnswer: "Poland"
    },
    {
      question: "What is the name of Jupiter's largest moon",
      answers: ["Oberon", "Ganymede", "Titan", "Europa"],
      rightAnswer: "Ganymede"
    },
    {
      question: "The shoe company Converse is owned by what major corporation?",
      answers: ["Addidas", "Timberland", "Puma", "Nike"],
      rightAnswer: "Nike"
    },
    {
      question: "Domingo is Spanish for what?",
      answers: ["Dominic", "Domino", "Sunday", "Saturday"],
      rightAnswer: "Sunday"
    },
    {
      question: "Who invented the telephone?",
      answers: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Jeff Bezos"],
      rightAnswer: "Alexander Graham Bell"
    },
    {
      question: "What is Sherlock Holmes' home address?",
      answers: ["22B Breaker Place", "222A Beeker Street", "221D Barker Ave", "221B Baker Street"],
      rightAnswer: "221B Baker Street"
    },
    {
      question: "Who leads the Teenage Mutant Ninja Turtles?",
      answers: ["Michaelangelo", "Donatello", "Raphael", "Leonardo"],
      rightAnswer: "Leonardo"
    },
    {
      question: "What does the 'c' in E=mc^2 stand for?",
      answers: ["Energy", "Speed of Light", "Mass", "Dark Matter"],
      rightAnswer: "Speed of Light"
    },
    {
      question: "What precious stone is the hardest?",
      answers: ["Diamond", "Ruby", "Sapphire", "Emerald"],
      rightAnswer: "Diamond"
    },
    {
      question: "What is the first letter on a standard keyboard?",
      answers: ["A", "Z", "Q", "P"],
      rightAnswer: "Q"
    },
  ]

  // loop through the array, and loop through the inner objects to append to the page

  for (var i = 0; i < questionBank.length; i++) {
    $("#question-text").append(`<h5>${questionBank[i].question}</h5>${questionBank[i].answers.join("<br>")}<br><br>`)
  }


  $("#play-game").on("click", begin);

  function begin() {
    if (!clockRunning) {
      isClockRunning = true;
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    };
  };

  function count() {

    //  TODO: increment time by 1
    countdown--;

    var timeConverted = timeConverter(countdown);
  
    $("#timer").text(timeConverted);  
  };

  count();

  function timeConverter(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
  
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
  }

  function reset() {

    countdown = 301;

    
    $("#correct").text("");
    $("#wrong").text("");
  };





  // DON'T DELETE THESE closing document.ready BRACKETS!!!
});