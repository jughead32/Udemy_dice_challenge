/* need to create a function to generate random number 1-6 and asign it to  variable for player and pc.
then need to write that to DOM calling cooresponding imgm of dice. also then need to print who won */

let playerNum = Math.floor((Math.random() *6) +1);
let compNum = Math.floor((Math.random() *6) +1);

switch (playerNum){
  case 1:
  document.getElementById('player1').src = "images/dice1.png";
  break;
  case 2:
document.getElementById('player1').src = "images/dice2.png";
  break;
case 3:
  document.getElementById('player1').src = "images/dice3.png";
  break;
case 4:
  document.getElementById('player1').src = "images/dice4.png";
  break;
case 5:
document.getElementById('player1').src = "images/dice5.png";
  break;
case 6:
document.getElementById('player1').src = "images/dice6.png";
  break;

};
switch (compNum){
  case 1:
  document.getElementById('player2').src = "images/dice1.png";
  break;
  case 2:
  document.getElementById('player2').src = "images/dice2.png";
  break;
case 3:
  document.getElementById('player2').src = "images/dice3.png";
  break;
case 4:
  document.getElementById('player2').src = "images/dice4.png";
  break;
case 5:
  document.getElementById('player2').src = "images/dice5.png";
  break;
case 6:
  document.getElementById('player2').src = "images/dice6.png";
  break;

};
if (playerNum > compNum){
  document.getElementById('response').innerHTML= "Player One Has Rolled Higher and WINS!!";
} else if (playerNum < compNum) {
  document.getElementById('response').innerHTML= "Player Two Has Rolled Higher and WINS!!";
} else {
  document.getElementById('response').innerHTML= "Tie Game Roll Again!";
}
