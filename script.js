$('document').ready(function(){

  $("#guess").hide();
blankSection = $("section:nth-of-type(2)")

// PSEUDOCODE
//
// Wireframe it out
//
// make a form entry, on submit, store to variable DONE
// limit guesses to lowercase letters
// limit guesses to fewer than ten letters DONE
// on submit - change focus to other text box DONE
// split variable to array DONE
// append divs number of divs equal to array length DONE
// log keystrokes? write them to guessed section, if matched to any in divs, write guess to EVERY div. DONE
// if all guesses are present - win condition DONE
// make failure counter for wrong guesses DONE
// if fail counter gets to zero, lose condition DONE
// on win condition, loss condition, increment score and switch players

var answer = ''
var guesses = ['']
var guess = ''
var failCounter = 8
var correctGuesses = []
var player = 1;

if ((player % 2) == 1) {
  console.log("player one turn")
} else {console.log("player two turn")}

$("#guess").hide()


$("#answerform").on("submit", function(evt){
  //prevent the default action

  evt.preventDefault();
var answer = $("#answer").val();
if (answer.length > 10) {
  alert("Come on man that's too many letters")
} else {
answerArray = answer.split("")
$("#answer").val(null);
$("form").hide();
$("#guess").show().focus();
console.log(answerArray)
for (i=0;i<answer.length;i++){
blankSection.append("<div class='blankAnswer'><p></p</div>")}


}
})




$("#guess").on("keypress", function(evt){
  //prevent the default action
  evt.preventDefault();
  $("input").css("background-color", "green")
  guess = String.fromCharCode(evt.which);
if (jQuery.inArray(guess, guesses) < 0 ) {

  $(".guesses").append("<div class='guess'>" + guess + "</div>")
  guesses.push(guess)
  console.log("guess array:" + guesses)
}

if ((jQuery.inArray(guess, answerArray) < 0)){
// $("aside div").remove(".clear")
$("aside").append("<div class='water'>")
$("input").css("background-color", "red")
failCounter -= 1;
if (failCounter == 0){
  setTimeout(function(){alert("You have lost")}, 400)
  // $("form").show();
  // $("#guess").hide();
  // for (i = 0; i < answerArray.length; i++) {
  //   blankSection.children().remove();
  // }
  // for (i = 0; i < guesses.length; i++) {
  //   $(".guesses").remove();
  // }
  // setTimeout(function(){$(".water").remove()}, 600)
  //
  //
  // answerArray = []
  // guesses = []
  // var player = 1 + player;

}
}

// have to do all iterations of it
if (($.inArray(guess, answerArray) > -1) && ($.inArray(guess, correctGuesses) < 0)){

    for(i = 0; i < answerArray.length; i++){
        if (answerArray[i] === guess){
            blankSection.children().eq(i).html(answerArray[i])
            correctGuesses.push(answerArray[i])
            console.log(correctGuesses)
          }}
if (answerArray.length == correctGuesses.length){
  setTimeout(function(){alert("You have won!")}, 400)
}

//
//   i = jQuery.inArray(guess, answerArray);
// // $(".blankAnswer").siblings([i]).html(answerArray[i])
// blankSection.children().eq(i).html(answerArray[i])


}


else {
  console.log("error")
}

})



$("#guess").on("keyup", function(evt){
$("input").css("background-color", "white")})

// function isMatch(){
//
//
// }
// console.log(/[0-6]/.test("3"));
// // → true
// console.log(/[a-z]/.test("2"));
// // → false


})





// for (i=0;i<6;i++) {
//   if (guess == (guesses[i])) {
//   // $("h1").append(guess)
//   // guesses.push(guess);
//   console.log("NOPE")}
//  else {
//   $("h1").append(guess)
//   guesses.push(guess);
//   console.log(guesses)
// $("#guess").val(null);
