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
    var move=null;
    move=getInput();
    return move;
}

function getComputerMove() {
    var move=null;
    move=randomPlay();
    return move;
}

function getWinner(playerMove,computerMove) {
   var winner;
    if (playerMove===computerMove){
    	winner="tie";
        }
    else if (computerMove==="rock"){
        if (playerMove==="scissors"){
            winner="computer";
           
        }
          else {
          	winner="player";
             
          }
     }
    
     else if (computerMove==="scissors"){
     	if (playerMove==="paper"){
     		winner="computer";
            
        }
          else {
             winner="player";
          
             
          }
        }
    
     else if (computerMove==="paper"){
     	if (playerMove==="rock"){
     		winner="computer";
            
     	}
          else
             {
                winner="player";
             	
              }
        }
   return winner;
  
}

function playtoFive() {
  console.log('Let\'s play Rock Paper Scissors');
  var playerWins = 0;
  var computerWins = 0;
  while (playerWins < 5 && computerWins < 5){ 
      var playerMove=getPlayerMove();
      var computerMove=getComputerMove();
      console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
       var winner=getWinner(playerMove,computerMove);
      console.log(winner +' wins!');
        if (winner==="player"){
    	     playerWins+=1;   
    }
     else if (winner==="computer"){
    	    computerWins +=1;
    }
    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    
}
}
var playerMove,computerMove;
playtoFive();