

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
        return "TIE!"}
        
    else if (computerMove==="rock"){
        if (playerMove==="scissors"){
            winner="computer";
            return "COMPUTER WINS";
        }
          else {
          	winner="player";
              return "PLAYER WINS" ;
          }
     }
    
     else if (computerMove==="scissors"){
     	if (playerMove==="paper"){
     		winner="computer";
            return "COMPUTER WINS";
        }
          else {
             winner="player";
             return "PLAYER WINS";
             
          }
        }
    
     else if (computerMove==="paper"){
     	if (playerMove==="rock"){
     		winner="computer";
            return"COMPUTER WINS";
     	}
          else
             {
                winner="player";
             	return "PLAYER WINS" ;
              }
        }
   return winner;
  
}

function playtoFive() {
  console.log('Let\'s play Rock Paper Scissors');
  var playerWins = 0;
  var computerWins = 0;
  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  console.log(getWinner(playerMove,computerMove));
    if ((getWinner())==="player"){
    	playerWins= playerWins+1;
    	console.log(playerWins);
    }
    else if (getWinner()==="computer"){
    	computerWins =computerWins+1;
    	console.log(computerWins);
    }
    
    else 	{
    	computerWins =computerWins+0;
    	playerWins= playerWins+0;
    }
    
    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    
}
var playerMove=getPlayerMove();
var computerMove=getComputerMove();

    
