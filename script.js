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

//evaluate matchup - playRound function

//run 5 rounds of the game

//evaluate and announce the winner