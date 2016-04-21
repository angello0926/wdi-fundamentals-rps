////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove() {
    var move=getInput();
    return move;
}

function getComputerMove() {
    var move=randomPlay();
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove==computerMove){
       console.log("Tie");
        return winner=="tie";

    }
    
    else if (computerMove=="rock"){
        if (playerMove==="scissors"){
            return winner=="computer" ;
        }
          else if (playerMove=="paper"){
              return winner=="player" ;
          }
     }
    
     else if (computerMove=="scissors")
        {if (playerMove==="paper"){
            return winner=="computer" ;
        }
          else if (playerMove==="rock"){
              return winner=="player"  ;
          }
        }
    
     else if (computerMove=="paper")
        {if (playerMove==="rock"){
            return winner=="computer" ;
        }
          else if (playerMove=="scissors"){
              return winner=="player"  ;
          }
        }

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
   if (getWinner()==="player"){playerWins++;}
   if (getWinner()==="player"){playerWins++; }
    return [playerWins, computerWins];
}


var playerMove=getPlayerMove();
var computerMove=getComputerMove();
   console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
var playerWins=getWinner();
var computerWins=getWinner();

 console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');    
 
