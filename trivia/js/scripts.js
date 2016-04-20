// Scripts

$(document).ready(function() {
 
   var playerName = '';
   var playerAnswer1 = '';
   var answer1 = 'Teamwork';
   var correctCounter = 0;

 
   // Hide Player Name
   $('#show-player-name').hide();
   $('.question').hide();
   $('.correct-msg').hide();
   $('.incorrect-msg').hide();
   // Allow user to type name immediately on page load
   $('#player-name').focus();
 
     // When user submits name, welcome screen disappears
  function removeWelcomeScreen() {
    $('#welcome-screen').detach();
    $('#show-player-name').show().addClass('animated fadeIn');
  };

  // Store player name
  $('#name-button').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    playerName = $('#player-name').val();
    console.log(playerName);
    $('#show-player-name').text(playerName);
    $('#welcome-screen').addClass('animated fadeIn');
    setTimeout(removeWelcomeScreen, 1000);
   });

  // Store answer 1
  $('#question1-btn').on('click', function(e) {
    e.preventDefault(); //prevents form from submitting to a data base
    playerAnswer1 = $('#input-question1').val().trim();
    console.log(playerAnswer1);
    showPlayerAnswer1();
  });
   
  //Show answers
  function showPlayerAnswer1() {
    console.log('showPlayerAnswer1 function fired');
    $('#show-player-answer1').text(playerAnswer1);
    $('#correct-answer1').text(answer1);

  };

  function answerCheck1() {
    if(playerAnswer1 === answer1) {
      console.log("Players answer is correct!");
    $('#correct-msg1').show().addClass('animated bounce')
    $('#score').text(correctCounter);
  }
  else {
    console.log("Player's answer is incorrect!");
  }
    $('#playerAnswer1').addClass('animated fadeOut');
    $('#incorrect-msg1').show().addClass('animated fadeIn');
  }
    // setTimeout(removeplayerAnswer1, 1000);
  };

});
    // Display's the right answer


 
 // ready function ends