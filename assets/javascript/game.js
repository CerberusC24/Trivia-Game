$(document).ready(function () {

  // create global game variables

  var correctAnswers = 0;
  var wrongAnswers = 0;
  var countdown = 300;
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
    console.log(questionBank[i])
    $("#question-text").append(`<h5>${questionBank[i].question}</h5>${questionBank[i].answers.join("<br>")}<br><br>`)
  }



  window.onload = function () {
    $("#play-game").on("click", begin);
  };

  function begin() {

    if (!clockRunning) {
      clockRunning = true;
      intervalId = setInterval(count, 300);
    };

    if (countdown === 0) {
      $("#message").text("You Have Run Out of Time!")
    }
  };

  function count() {

    //  TODO: increment time by 1
    countdown--;

    var timeConverted = timeConverter(countdown);
  
    $("#timer").text(timeConverted);
  
    //  TODO: Get the current time, pass that into the timeConverter function, and save the result in a variable.
    // input = 5 || output = 00:05
    // input = 65 || output : 01:05
  
  };

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

  function stop() {

    //  TODO: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;

  };

  function reset() {

    countdown = 30000;

    $("#display").text("5:00");
    $("#correct").text("");
    $("#wrong").text("");
  };





  // DON'T DELETE THESE closing document.ready BRACKETS!!!
});