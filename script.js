"use strict";

let BESTOF = 5;

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
    //propmpt player again if it doesn't match options
    else {
        console.log("Please pick either rock, paper or scissors.")
        return playerSelection();
    }

}

//evaluate matchup - playRound function
function playRound() {
    let computerInput = computerSelection();
    let playerInput = playerSelection();
    let roundWinner = evalRound(computerInput, playerInput);
    
    return roundWinner;
}

//run 5 rounds of the game
function game() {
    let playerPoints = 0;
    for (let i = 0; i < BESTOF; i++) {
        let isDraw = true;
        let roundResult;
        while (isDraw) {
            roundResult = playRound();
            if (roundResult !== "draw") {
                isDraw = false;
                if (roundResult === "player") {
                    playerPoints++;
                };
            };
        }
    }

    if (playerPoints > BESTOF/2) {
        console.log("You have won the game!");
    } else {
        console.log("You have lost the game!")
    }

}

//evaluate and announce the winner
function evalRound(computerInput, playerInput) {
    if (computerInput === playerInput) {
        console.log(`You both pick ${playerInput}! It's a draw!`);
        return "draw";
    }

    if (((computerInput === "rock") && (playerInput === "scissors"))
    || ((computerInput === "scissors") && (playerInput === "paper"))
    || ((computerInput === "paper") && (playerInput === "rock"))) {
        console.log(`${computerInput} beats ${playerInput}!`);
        console.log("You have lost this round!");
        return "computer";
    } else {
        console.log(`${playerInput} beats ${computerInput}!`);
        console.log("You have won this round!");
        return "player";
    }
}