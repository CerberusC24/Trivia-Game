$(document).ready(function () {

  // create global game variables

  var correct = 0;
  var wrong = 0;
  var countdown = 121;
  var intervalID;
  var clockRunning = false;

  // create array of objects containing questions and their answers:

  var questionBank = [

    {
      question: "Warsaw is the capitol of what country?",
      answers: ["Poland", "Germany", "Austria", "Russia"],
      rightAnswer: "Poland",
      userAnswer: "",
    },
    {
      question: "What is the name of Jupiter's largest moon",
      answers: ["Oberon", "Ganymede", "Titan", "Europa"],
      rightAnswer: "Ganymede",
      userAnswer: "",
    },
    {
      question: "The shoe company Converse is owned by what major corporation?",
      answers: ["Addidas", "Timberland", "Puma", "Nike"],
      rightAnswer: "Nike",
      userAnswer: "",
    },
    {
      question: "Domingo is Spanish for what?",
      answers: ["Dominic", "Domino", "Sunday", "Saturday"],
      rightAnswer: "Sunday",
      userAnswer: "",
    },
    {
      question: "Who invented the telephone?",
      answers: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Jeff Bezos"],
      rightAnswer: "Alexander Graham Bell",
      userAnswer: "",
    },
    {
      question: "What is Sherlock Holmes' home address?",
      answers: ["22B Breaker Place", "222A Beeker Street", "221D Barker Ave", "221B Baker Street"],
      rightAnswer: "221B Baker Street",
      userAnswer: "",
    },
    {
      question: "Who leads the Teenage Mutant Ninja Turtles?",
      answers: ["Michaelangelo", "Donatello", "Raphael", "Leonardo"],
      rightAnswer: "Leonardo",
      userAnswer: "",
    },
    {
      question: "What does the 'c' in E=mc^2 stand for?",
      answers: ["Energy", "Speed of Light", "Mass", "Dark Matter"],
      rightAnswer: "Speed of Light",
      userAnswer: "",
    },
    {
      question: "What precious stone is the hardest?",
      answers: ["Diamond", "Ruby", "Sapphire", "Emerald"],
      rightAnswer: "Diamond",
      userAnswer: "",
    },
    {
      question: "What is the first letter on a standard keyboard?",
      answers: ["A", "Z", "Q", "P"],
      rightAnswer: "Q",
      userAnswer: "",
    },
  ]

  window.onload = function () {
    $("#play-game").on("click", begin);
  };

  function begin() {

    if (!clockRunning) {
      clockRunning = true;
      intervalID = setInterval(count, 1000);

      function renderQuestions() {

        // clear out form
        $("#question-field").empty();

        $("#question-field").append(`<div>
        <a class="btn btn-outline-danger my-2 my-sm-0" id="submit-answers" type="submit">Submit Answers</a>
      </div>`)

        // Loop through questions array
        questionBank.forEach(function (questionOBJ, index) {

          // create div to hold question
          var $questionDiv = $("<div>").addClass("form-group");
          // <div class="form-group"></div>

          // add question to div
          var $label = $("<h4>")
            .text(questionOBJ.question)
            .appendTo($questionDiv);
          /*
            <div class="form-group"> 
              <h4>Question 1</h4> 
            </div>
          */

          // shuffle choices
          questionOBJ.answers = questionOBJ.answers.sort(function () {
            return .5 - Math.random();
          });

          // create a loop to iterate through question's choices and create radio buttons for each one
          for (var i = 0; i < questionOBJ.answers.length; i++) {
            // create a div for choice and add bootstrap classes
            var $choice = $('<div>');
            $choice.addClass('form-check form-check-inline');

            // create an input tag for the radio button
            var $radio = $('<input>');

            // add attributes to provide the answer choice
            // the "name" attribute is super important, all radio buttons per question need to have the same "name" so they know which question it applies to
            $radio
              .attr({
                type: "radio",
                value: questionOBJ.answers[i],
                name: index,
                class: "form-check-input"
              })
              .appendTo($choice);

            // create label to actually print the choice to the page
            var $choiceLabel = $('<label>');
            $choiceLabel
              .text(questionOBJ.answers[i])
              .addClass('form-check-label')
              .appendTo($choice);

            // add whole radio button choice to question
            $choice.appendTo($questionDiv);
          }
          // when done making all of the choices, add whole question to the page
          $("#question-field").prepend($questionDiv);
        });
      }

      // create on "change" listener for all radio buttons but bind them to question-field since it's permanently on the page
      $("#question-field").on("change", ".form-check-input", function () {
        console.log(this);

        // GET question index out of "name" attribute so we know what question you answered
        var questionIndex = $(this).attr("name");

        console.log(questionBank[questionIndex]);

        // get value out of radio button you selected
        var answer = $(this).val();

        // set answer to question's userAnswer property
        questionBank[questionIndex].userAnswer = answer;
      });
     

      renderQuestions();
    };

    $("#question-field").on("click", "#submit-answers", function() {
      clearInterval(intervalID);

      for (i = 0; i < questionBank.length; i++) {
        if(questionBank[i].answer === questionBank[i].userAnswer) {
          correct++
        }
        else { wrong++
        }
      }

      $("#correct").text(correct);
      $("#wrong").text(wrong);
      
    });


  };

  function count() {

    countdown--;

    if (countdown === 0) {
      clockRunning = false;
      $("#message").text("You Have Run Out of Time!");
      stop();
    };

    function stop() {
      if (clockRunning === false) {
        clearInterval(intervalID);
      };
    };

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
    } else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  };

  function gameReset() {
    countdown = 121;
    begin()
  }





  // DON'T DELETE THESE closing document.ready BRACKETS!!!
});