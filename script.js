$('document').ready(function(){
$("#guess").hide();
blankSection = $("section:nth-of-type(2)")
guessBoard = $(".guesses")

// PSEUDOCODE
//
// Wireframe it out
//
// make a form entry, on submit, store to variable DONE
// limit guesses to lowercase letters DONE
// limit guesses to fewer than ten letters DONE
// on submit - change focus to other text box DONE
// split variable to array DONE
// append divs number of divs equal to array length DONE
// log keystrokes? write them to guessed section, if matched to any in divs, write guess to EVERY div. DONE
// if all guesses are present - win condition DONE
// make failure counter for wrong guesses DONE
// if fail counter gets to zero, lose condition DONE
// on win condition, loss condition, increment score and switch players DONE


var answer = ''
var guesses = ['']
var guess = ''
var failCounter = 8
var correctGuesses = ['']
var player = 1;
var playerOnescore = 0;
var playerTwoscore = 0;



if ((player % 2) == 1) {
  console.log("player one turn")
} else {console.log("player two turn")}


$("#answerform").on("submit", function(evt){
  //prevent the default action
  evt.preventDefault();
// convert to lowercase* and store as variable
answer = $("#answer").val().toLowerCase();
// answer = userAnswer.;
if (answer.length > 10) {
$("article").remove()
blankSection.append("<article>Come on man that's too many letters</article>")
$("#answer").val(null);
}
// if answer contains a number or weird character, error out
else if ((/\d/).test(answer) || (/\W/).test(answer)) {
  $("article").remove()
  blankSection.append("<article>No numbers or weird characters, please</article>")
  $("#answer").val(null);

}

else {
answerArray = answer.split("")
$("#answer").val(null);
$("form").hide();
$("#guess").show().focus();
$("article").remove();



for (i=0;i<answer.length;i++){
setTimeout(function(){blankSection.append("<div class='blankAnswer'><p></p</div>");
$('.blankAnswer').addClass('animated fadeInUp')
}, 100)}
console.log("answer array: " + answerArray)


}
})


$("#guess").on("keypress", function(evt){
  //prevent the default action
  evt.preventDefault();
  $("input").css("background-color", "green")
// If guess is not a letter, error out, else add to guesses:
guess = String.fromCharCode(evt.which).toLowerCase();

if ((/\d/).test(guess) || (/\W/).test(guess)) {
  $("#guess").attr("placeholder", "That's not a letter");
  setTimeout(function(){$("#guess").attr("placeholder", "Try again")}, 900)
}
  //if the guess has not been guessed yet, push to guesses array
else if ($.inArray(guess, guesses) < 0 ) {

  $(".guesses").append("<div class='guess'>" + guess.toUpperCase() + "</div>")
  guesses.push(guess)

//and then if the guess is not in the answerArray
if (($.inArray(guess, answerArray) < 0)){
$("aside").append("<div class='water'>")
$(".water").addClass('animated fadeInUp')
$("input").css("background-color", "red")
failCounter -= 1;
if (failCounter == 0){
  setTimeout(function(){alert("You have lost, the word was: " + answer)}, 400)
  player = player + 1;
resetBoard()
}
}
}

// have to do all iterations of it
// if the guess is in the answerArray and it's not already in correctGuesses,
// add it to the corresponding div in blankSection, and push to correctGuesses, show the correctGuesses
if (($.inArray(guess, answerArray) > -1) && ($.inArray(guess, correctGuesses) < 0)){

    for(i = 0; i < answerArray.length; i++){
        if (answerArray[i] === guess){
            blankSection.children().eq(i).html(answerArray[i])
            correctGuesses.push(answerArray[i])
            console.log("these are correct guesses: " + correctGuesses)
          }}
// OKAY I DON'T KNOW WHY IT'S ADDING ONE MORE TO THE ARRAY BUT THIS IS MY HACKY SOLUTION
if (answerArray.length+1 == correctGuesses.length){
  setTimeout(function(){alert("Success! The word was: " + answer)}, 400);
  if ((player % 2) == 0)
  {
    $("#one").html(Number(playerOnescore += 1));
  } else {
    $("#two").html(Number(playerTwoscore += 1));
  }
  player = player + 1;
  setTimeout(function(){resetBoard()}, 400);

}
}

else {
  console.log("wrong guess")
}

})


$("#guess").on("keyup", function(evt){
$("input").css("background-color", "white")})

function resetBoard(){
$("input").css("background-color", "white");
$("form").show();
$("#answer").focus();
$("#guess").hide();

answerArray = ['']
guesses = ['']
correctGuesses = ['']
failCounter = 8;
if ((player % 2) == 1) {
  console.log("player one turn")
  $("#answer").attr("placeholder", "Player One pick a word")
  $("#guess").attr("placeholder", "Player Two what's your guess?")

} else {console.log("player two turn");
$("#answer").attr("placeholder", "Player Two pick a word")
$("#guess").attr("placeholder", "Player One what's your guess?")
}

for (i = 0; i < answerArray.length; i++) {
  blankSection.children().remove();

}
for (i = 0; i < guesses.length; i++) {
//   guesses.pop();
  $(".guess").remove();
}

setTimeout(function(){$(".water").remove()}, 600)

}

})
