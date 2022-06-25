"use strict";

//generate random computer choice
function computerSelection () {
    let randomNumber = Math.floor(Math.random()*3);
    
    switch (randomNumber) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
        default: return 1;
    }
}

//get input from player
function playerSelection() {
    //create variable playerInput and fill it
    let playerInput = prompt("Pick your play: ", "empty");

    //check if it's a string
    if ((typeof playerInput) != "string") {
        console.log("Please pick either rock, paper or scissors.");
        return playerSelection();
        }

    //create variable for lowercase string
    let playerInputLower = playerInput.toLowerCase().trim();

    //return the input if it's one of three options
    if ((playerInputLower == "rock") || (playerInputLower == "paper") || (playerInputLower == "scissors")) return playerInputLower;
    else {
        console.log("Please pick either rock, paper or scissors.")
        return playerSelection();
    }

    //propmpt player again if it doesn't match options
}

//evaluate matchup - playRound function

//run 5 rounds of the game

//evaluate and announce the winner