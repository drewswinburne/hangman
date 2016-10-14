$('document').ready(function(){

  $("#guess").hide();

// PSEUDOCODE
//
// Wireframe it out
//
// make a form entry, on submit, store to variable

$("#answerform").on("submit", function(evt){
  //prevent the default action
  evt.preventDefault();
var answer = $("#answer").val();
answerArray = answer.split("")
$("#answer").val(null);
$("form").hide();
$("#guess").show();
console.log(answerArray)
for (i=0;i<answer.length;i++){
$("section:nth-of-type(2)").append("<div class='blankAnswer'>")



}
})
var answer = ''
var guesses = ['']
var guess = ''

// split variable to array
// append divs number of divs equal to array length
// log keystrokes? write them to guessed section, if matched to any in divs, write to those divs


$("#guess").on("keypress", function(evt){
  //prevent the default action
  evt.preventDefault();
  $("input").css("background-color", "green")
  guess = String.fromCharCode(evt.which);
if (jQuery.inArray(guess, guesses) < 0 ) {

  $("h1").append(guess)
  guesses.push(guess)
}

if ((jQuery.inArray(guess, answerArray) < 0)){
// $("aside div").remove(".clear")
$("aside").append("<div class='water'>")
$("input").css("background-color", "red")

}
if (jQuery.inArray(guess, answerArray) > -1){
  i = jQuery.inArray(guess, answerArray);
$(".blankAnswer").html(answerArray[i])


  // isMatch();
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
