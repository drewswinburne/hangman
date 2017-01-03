# HANGMAN

## General Assembly WDI Project 1

### About

After one week of Javascript study we were asked to create a web-based game using HTML, CSS, and JQuery. I made a version of Hangman with two-player functionality, and an emphasis on user experience. I used CSS animations to illustrate rising water on wrong guesses, and regular expressions to filter out non-alphabetical characters. Different visual feedback is given when a user make a wrong guess (their guessed letter is not part of the word to be guessed) and when they make an invalid guess (no penalty for a letter already guessed or a non-alphabetical character).

### User Stories

##### GOLD
* As a user, I want to have the objectives of the game displayed at startup, so I know what to do
* As a user, I want some cool animations
* Scores for player one and player two


> Not implemented:

>* A countdown timer
* different difficulty levels - more guesses?
* Single player hard mode - pull word from [wolfram alpha hangman words] (http://blog.wolfram.com/2010/08/13/25-best-hangman-words/)


##### SILVER
* As a user, I want my unsuccessful guesses to display so I can reference them
* I want to have guessable words be of variable length (with max char limit)
* I want to not be able to accidentally guess letters I've tried, or weird characters. I want feedback if I've made an invalid guess.

> Not implemented:

>* As a user, I want to be able to randomly generate a word to play the game in single player (maybe reference a large array)

##### BRONZE (minimum viable product)
* As a user, I want to have an input for the word to be guessed, and a means to hide it
* As a user, I want my unsuccessful guesses to result in a lost point (a hangman's limb) - 6 total
* As a user, I want my successful guesses to be revealed on the game board
* I want to have guessable words be a specific length (say 8 letters)
